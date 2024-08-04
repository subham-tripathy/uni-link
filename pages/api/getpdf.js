import con from "../Components/dbcon";

export default function handler(req, res) {
    const { id } = req.query;
    con.query('SELECT CompanyCertificate FROM companyregnrequest WHERE CompanyId = ?', [id], (err, result, fields) => {
        if (err) {
            console.error('Error fetching PDF data:', err);
            return res.status(500).json({ error: 'Error fetching PDF data' });
        }

        if (result.length === 0) {
            return res.status(404).json({ error: 'PDF data not found' });
        }

        const pdfData = result[0].CompanyCertificate; // Assuming 'CompanyCertificate' is the column name
        res.send(pdfData);
    });
}

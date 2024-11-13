import con from "../Components/dbcon";

export default function handler(req, res) {
    const { id } = req.query;
    
    // Query the database to get the PDF data
    con.query('SELECT CompanyCertificate FROM companyregnrequest WHERE CompanyId = ?', [id], (err, result, fields) => {
        // Handle errors in the database query
        if (err) {
            console.error('Error fetching PDF data:', err);
            return res.status(500).json({ error: 'Error fetching PDF data' });
        }

        // Check if the result is empty
        if (result.length === 0) {
            return res.status(404).json({ error: 'PDF data not found' });
        }

        // Extract PDF data from the result
        const pdfData = result[0].CompanyCertificate;
        
        // Set response headers for proper PDF download
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="certificate.pdf"');
        
        // Send the PDF data in the response
        res.send(pdfData);
    });
}

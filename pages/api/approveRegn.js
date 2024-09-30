import con from "../Components/dbcon";

export default function handler(req, res) {
    const { id } = req.query;

    con.query('SELECT CompanyName, CompanyId, CompanyMail, CompanyPassword FROM companyregnrequest WHERE CompanyId = ?', [id], (err, result, fields) => {
        if (err) {
            console.error('Error fetching company data:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        const { CompanyName, CompanyId, CompanyMail, CompanyPassword } = result[0];

        con.query('INSERT INTO users (CompanyName, CompanyId, CompanyMail, CompanyPassword) VALUES (?, ?, ?, ?)', [CompanyName, CompanyId, CompanyMail, CompanyPassword], (err, result, fields) => {
            if (err) {
                console.error('Error inserting company data:', err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }

            // Delete the company registration request after successfully inserting into users
            con.query('DELETE FROM companyregnrequest WHERE CompanyId = ?', [id], (err, result, fields) => {
                if (err) {
                    console.error('Error deleting company registration request:', err);
                    res.status(500).json({ error: 'Internal Server Error' });
                    return;
                }

                res.status(200).json({ msg: 'Company Approved' });
            });
        });
    });
}

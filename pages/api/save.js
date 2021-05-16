import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from './credentials.json'

const idDoc = '1GFk3gXl7dO74M8KlWolyTQwy8bjtbNPPDxvDRzqk2Uk'
const doc = new GoogleSpreadsheet(idDoc)

export default async(req, res) => {

    try {

        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()

        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)

        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Cupom: data.Cupom,
            Promo: data.Promo
            }
        )        
        //console.log(data)
        res.end(req.body)

    } catch (err) {
        res.end('Ocorreu um erro', err)
        console.log(err)
    }
}
import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from './credentials.json'

const idDoc = '1GFk3gXl7dO74M8KlWolyTQwy8bjtbNPPDxvDRzqk2Uk'
const doc = new GoogleSpreadsheet(idDoc)

export default async(req, res) => {

    try {

        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        console.log(doc.title)

        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A3:B3')

        const possuiPromo = sheet.getCell(2, 0);
        const textoPromo = sheet.getCell(2, 1);

        res.end(JSON.stringify({
            showCoupon: possuiPromo.value === 'VERDADEIRO',
            message: textoPromo.value
        }))

    } catch (err) {
        res.end('Ocorreu um erro', err)
        console.log(err)
    }    

}











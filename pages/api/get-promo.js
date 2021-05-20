import { GoogleSpreadsheet } from 'google-spreadsheet'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async(req, res) => {

    try {

        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: process.env.SHEET_PRIVATE_KEY
        })
        await doc.loadInfo()
        console.log(doc.title)

        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A3:C3')

        const possuiPromo = sheet.getCell(2, 0);
        const textoPromo = sheet.getCell(2, 1);
        const nomeRestaurante =  sheet.getCell(2, 2);

        res.end(JSON.stringify({
            showCoupon: possuiPromo.value === 'VERDADEIRO',
            message: textoPromo.value,
            restaurant: nomeRestaurante.value
        }))

    } catch (err) {
        res.end('Ocorreu um erro', err)
        console.log(err)
    }    

}











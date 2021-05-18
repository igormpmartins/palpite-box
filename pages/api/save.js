import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'
import { interpolateAs } from 'next/dist/next-server/lib/router/router'
import credentials from './credentials.json'


const idDoc = '1GFk3gXl7dO74M8KlWolyTQwy8bjtbNPPDxvDRzqk2Uk'
const doc = new GoogleSpreadsheet(idDoc)

const genCupom = () => {
    const cupom = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
    return cupom.substr(0, 4) + '-' + cupom.substr(4, 4) + '-' + cupom.substr(8, 4)

}

export default async(req, res) => {

    try {

        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()

        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)

        const sheetCfg = doc.sheetsByIndex[2]
        await sheetCfg.loadCells('A3:B3')

        const possuiPromo = sheetCfg.getCell(2, 0);
        const textoPromo = sheetCfg.getCell(2, 1);        
        const bolPossuiPromo = possuiPromo.value === 'VERDADEIRO'

        let Cupom = ''
        let Promo = ''

        if (bolPossuiPromo) {
            Cupom = genCupom(),
            Promo = textoPromo.value
        }

        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Nota: parseInt(data.Nota),
            Cupom,
            Promo,
            Data: moment().format('DD/MM/YYYY HH:mm:ss')
            }
        )        

        res.end(JSON.stringify({
            showCupon: bolPossuiPromo,
            Cupom,
            Promo
            }
        ))

    } catch (err) {
        res.end('Ocorreu um erro', err)
        console.log(err)
    }
}
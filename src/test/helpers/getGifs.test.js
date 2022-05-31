import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con getGifs Fetch', () => {
    
    test('Debe traer 10 elementos', async () => {
        const gifs = await getGifs('OnePunch');
        expect ( gifs.length ).toBe( 10 ); 
    });

    test('Debe traer 0 elementos si el argumento está vacío', async () => {
        const gifs = await getGifs('');
        expect ( gifs.length ).toBe( 0 );
    });
    
})


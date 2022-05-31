import { shallow } from "enzyme";
import React from "react";
import '@testing-library/jest-dom';
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe('Tests for GifGrid component', () => {
    const category = 'One Punch';
 
    test('should show the correct component and match with the snapshot', () => {
        
        useFetchGifs.mockReturnValue({data: [], loading: true});
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot(); 
    });

    test("Debe de mostrar items cuando se cargan imágenes useFetchGifs", () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier.cosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier.cosa.jpg',
            title: 'Cualquier cosa'
        }];
        useFetchGifs.mockReturnValue({data: gifs, loading: false});
        const wrapper = shallow(<GifGrid category={category} />);

        const GifGridItemLength = wrapper.find('GifGridItem').length;
        const gifslength = gifs.length;

        expect(wrapper).toMatchSnapshot(); 
        expect(wrapper.find('p').exists()).toBe(false);
        expect(GifGridItemLength).toBe(gifslength);
    });
});


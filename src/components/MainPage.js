import styled from "styled-components";

export default function MainPage() {
    return (
        <Page>
            <h1>Selecione o filme</h1>
            <Movies>
                <Movie>
                    <img src="https://cdn.fstatic.com/media/movies/covers/2021/09/i1618094189754080.jpeg" alt="Não foi possível carregar a imagem" />
                </Movie>
                <Movie>
                    <img src="https://cdn.fstatic.com/media/movies/covers/2021/09/i1618094189754080.jpeg" alt="Não foi possível carregar a imagem" />
                </Movie>
                <Movie>
                    <img src="https://cdn.fstatic.com/media/movies/covers/2021/09/i1618094189754080.jpeg" alt="Não foi possível carregar a imagem" />
                </Movie>
            </Movies>
        </Page>
    )
}

const Page = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
h1 {
    font-family: 'Roboto';
    font-size: 25px;
    margin: 50px;
};
`;

const Movies = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
`;

const Movie = styled.div`
width: 145px;
height: 210px;
margin: 10px 30px;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
img {
    width: 130px;
    height: 190px;
}
`;
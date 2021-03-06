import styled from "styled-components";

const data = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fviewers-disney.png?alt=media&token=59a3d1e7-4b82-48a1-9c30-bff2e418a85c",
    video: "/videos/1564674844-disney.mp4",
  },

  {
    img: "https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fviewers-pixar.png?alt=media&token=70676a1f-da5a-4f30-9f2f-2f7bdab10767",
    video: "/videos/1564676714-pixar.mp4",
  },

  {
    img: "https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fviewers-marvel.png?alt=media&token=47c7b1c3-ef5a-4c0e-8c17-db3a5dc06aa0",
    video: "/videos/1564676115-marvel.mp4",
  },

  {
    img: "https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fviewers-starwars.png?alt=media&token=404b0d89-3efc-4ba1-90cf-3db1cd2d029c",
    video: "/videos/1608229455-star-wars.mp4",
  },

  {
    img: "https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fviewers-national.png?alt=media&token=29982768-f0dc-49d4-b0eb-e0c0b098899e",
    video: "/videos/1564676296-national-geographic.mp4",
  },
];

const Viewers = (props) => {
  return (
    <Container>
      {data.map((index) => {
        return (
          <Wrap>
            <img src={index["img"]} alt="" />
            <video autoPlay={true} loop={true} playsInline={true}>
              <source src={index["video"]} type="video/mp4" />
              <source src={index["video"]} type="video/ogg" />
            </video>
          </Wrap>
        );
      })}
    </Container>  
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`;

export default Viewers;

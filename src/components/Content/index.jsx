import Sidebar from "../SideBar";
import { PawIcon } from "../Tabs/style";
import {
  AdditionalInfo,
  Description,
  DescriptionLabel,
  DescriptionRow,
  DescriptionValue,
  Title,
} from "./style";
import { ContentContainer, ContentInfo } from "./style";
import { getAllBreeds } from "../../api/breeds";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import pawIcon from "../../assets/icons/paw_4.svg";

export function LandingContent() {
  return (
    <ContentContainer style={{ backgroundColor: "rgba(253, 243, 233, 1)" }}>
      <ContentInfo>
        <Title>
          <PawIcon
            src={pawIcon}
            style={{
              filter: "invert(0.7)",
            }}
          />
          Welcome to Fetch A P I
          <PawIcon
            src={pawIcon}
            style={{
              filter: "invert(0.7)",
            }}
          />
        </Title>

        <Description style={{ fontFamily: "Play", margin: "0 10vw" }}>
          <h2>
            This responsive website was a part of our Front-end Bootcamp
            projects @MinderaSchool, it uses pretty much all the components that
            we studied during of this course.
          </h2>
        </Description>
        <AdditionalInfo>
          <ul>
            <li>API</li>
            <li>HTML</li>
            <li>Redux</li>
            <li>UseState & UseEffect</li>
            <li>Styled Components</li>
            <li>VITE & React</li>
          </ul>
        </AdditionalInfo>
      </ContentInfo>
    </ContentContainer>
  );
}

export function BreedsContent() {
  const [breeds, setBreeds] = useState([]);
  const breed = useSelector((state) => state.breed.selectedBreed);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllBreeds();
        setBreeds(data);
      } catch (error) {
        console.error("Error fetching breeds:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <ContentContainer>
      <ContentInfo>
        <Title>{breed.name}</Title>
        <Description>
          <DescriptionRow>
            <DescriptionLabel>Name:</DescriptionLabel>
            <DescriptionValue>{breed.name}</DescriptionValue>
          </DescriptionRow>
          <DescriptionRow>
            <DescriptionLabel>Breed for:</DescriptionLabel>
            <DescriptionValue>{breed.bred_for || "Unknown"}</DescriptionValue>
          </DescriptionRow>
          <DescriptionRow>
            <DescriptionLabel>Life span:</DescriptionLabel>
            <DescriptionValue>{breed.life_span}</DescriptionValue>
          </DescriptionRow>
          <DescriptionRow>
            <DescriptionLabel>Temperament:</DescriptionLabel>
            <DescriptionValue>{breed.temperament}</DescriptionValue>
          </DescriptionRow>
          <DescriptionRow>
            <DescriptionLabel>Origin:</DescriptionLabel>
            <DescriptionValue>{breed.origin || "Unknown"}</DescriptionValue>
          </DescriptionRow>
          <DescriptionRow>
            <DescriptionLabel>Weight:</DescriptionLabel>
            <DescriptionValue>{breed.weight.metric} kg</DescriptionValue>
          </DescriptionRow>
          <DescriptionRow>
            <DescriptionLabel>Height:</DescriptionLabel>
            <DescriptionValue>{breed.height.metric} cm</DescriptionValue>
          </DescriptionRow>
        </Description>
      </ContentInfo>
      <Sidebar list={breeds}></Sidebar>
    </ContentContainer>
  );
}

export function FavouritesContent() {
  return (
    <ContentContainer>
      <ContentInfo>
        <Title>Favourites</Title>
        <Description>Favourites Description</Description>
        <AdditionalInfo>Additional information Favourites</AdditionalInfo>
      </ContentInfo>
      <Sidebar></Sidebar>
    </ContentContainer>
  );
}

export function PhotosContent() {
  const [breeds, setBreeds] = useState([]);
  const breed = useSelector((state) => state.breed.selectedBreed);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllBreeds();
        setBreeds(data);
      } catch (error) {
        console.error("Error fetching breeds:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <ContentContainer>
      <ContentInfo>
        <Title>{breed.name}</Title>
        <Description>Photos</Description>
        <AdditionalInfo>Additional information Photos</AdditionalInfo>
      </ContentInfo>
      <Sidebar list={breeds}></Sidebar>
    </ContentContainer>
  );
}

export default LandingContent;

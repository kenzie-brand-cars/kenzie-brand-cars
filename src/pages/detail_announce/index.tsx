import { Container } from "../../components/container"
import { CarImageCard } from "./components/car_image_card"
import { Navbar } from "../../components/navbar"
import { StyledDetailAnnouncementPage } from "./style"
import { mockDatabase } from '../../mock/data'
import modelCar from '../../assets/model-car.png'
import { CarInfoCard } from "./components/car_info_card"
import { CarDescriptionCard } from "./components/car_description"
import { CarImageGalery } from "./components/car_image_galery"
import { AdvertiserCard } from "./components/advertiser_card"
import { AnnouncementComents } from "./components/announcement_coments"
import { CreateComentCard } from "./components/create_comment_card"
import { Footer } from "../../components/footer"
import { BackgroundBlue } from "./components/bg_blue"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useRequests } from "../../hooks/RequestsHooks"

export interface ICarAnnouncementDetail {
    id: number;
    km: number;
    price_fipe: number;
    price: number;
    description: string;
    image: string;
    withinFipe: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: null;
    softDeleted: boolean;
    publishedAt: boolean;
    mark: string;
    model: string;
    fuel: string;
    color: string;
    owner: Owner;
    comments: Comment[];
    year: string;
    gallery: string[]
}
export interface Comment {
    text: string;
    createdAt: string;
    author: {
      id: string;
      name: string;
      email: string;
      reset_token: null | string;
      cpf: string;
      phone: string;
      birthDate: string;
      description: string;
      type: string;
      admin: boolean;
    };
  }
  
export interface Owner {
    name: string;
    id: string;
    email: string;
    cpf: string;
    phone: string;
    birthDate: string;
    description: string;
    type: string;
    admin: boolean;
}



export const DetailAnnouncementPage = () => {

    const { getSpecificAnnounce } = useRequests()
    const { id } = useParams()
    const [currentCar, setCurrentCar] = useState<ICarAnnouncementDetail>()
    const [commentCreated, setCommentCreated] = useState(false);
    const fetchData = async () => {
        const response = await getSpecificAnnounce(parseFloat(id as string))
        if (response) {
            const gallery: string[] = []
            for (let i = 0; i < 5; i++) {
                gallery.push(response.image)
            }
            
            setCurrentCar({ ...response, gallery })
        }
    }
    useEffect(() => {
        fetchData()
    }, [commentCreated])

    if (!currentCar) {
        return null
    }
    return (
        <StyledDetailAnnouncementPage>
            <Container>
                <div className="layout">
                    <div className="original">
                        <BackgroundBlue />
                        <CarImageCard sourceImage={currentCar.image} />
                        <CarInfoCard color={currentCar.color} fuel={currentCar.fuel} km={currentCar.km} mark={currentCar.mark} model={currentCar.model} price={currentCar.price} price_fipe={currentCar.price_fipe} year={parseFloat(currentCar.year)} />
                        <CarDescriptionCard description={currentCar.description} />
                        <CarImageGalery className="only-mobile" galery={currentCar.gallery} />
                        <AdvertiserCard className="only-mobile" owner={currentCar.owner} />
                        <AnnouncementComents coments={currentCar.comments}/>
                        <CreateComentCard setCommentCreated={setCommentCreated} idAnnounce={currentCar.id}/>
                    </div>
                    <div className="desktop">
                        <CarImageGalery galery={currentCar.gallery} />
                        <AdvertiserCard owner={currentCar.owner} />
                    </div>
                </div>
            </Container>
        </StyledDetailAnnouncementPage>

    )
}
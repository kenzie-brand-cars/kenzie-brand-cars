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
export interface ICarAnnouncementDetail {
    year: number;
    km: number;
    price_fipe: number;
    price: number;
    description: string;
    image: string;
    mark: string;
    model: string;
    fuel: string;
    color: string;
    gallery: Gallery;
}

export interface Gallery {
    images: string[];
}



export const DetailAnnouncementPage = () => {
    const currentCar: ICarAnnouncementDetail = {
        "year": 2019,
        "km": 20000,
        "price_fipe": 40000,
        "price": 42000,
        "description": "Excelente estado, único dono",
        "image": modelCar,
        "mark": "Toyota",
        "model": "Corolla",
        "fuel": "Gasolina",
        "color": "Preto",
        "gallery": {
            "images": [
                modelCar,
                modelCar,
                modelCar,
                modelCar,
                modelCar,
                modelCar,
                modelCar,
                modelCar,
                modelCar,
                modelCar,
                modelCar,
                modelCar,
                modelCar,
                modelCar
            ]
        }
    }
    return (
        <StyledDetailAnnouncementPage>
            <Container>
                <div className="layout">
                    <div className="original">
                        <BackgroundBlue />
                        <CarImageCard sourceImage={currentCar.image} />
                        <CarInfoCard color={currentCar.color} fuel={currentCar.fuel} km={currentCar.km} mark={currentCar.mark} model={currentCar.model} price={currentCar.price} price_fipe={currentCar.price_fipe} year={currentCar.year} />
                        <CarDescriptionCard description={currentCar.description} />
                        <CarImageGalery className="only-mobile" galery={currentCar.gallery} />
                        <AdvertiserCard className="only-mobile" />
                        <AnnouncementComents />
                        <CreateComentCard />
                    </div>
                    <div className="desktop">
                        <CarImageGalery galery={currentCar.gallery} />
                        <AdvertiserCard />
                    </div>
                </div>
            </Container>
        </StyledDetailAnnouncementPage>

    )
}
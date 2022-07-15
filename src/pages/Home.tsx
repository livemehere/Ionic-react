import {
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { camera } from "ionicons/icons";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

interface UserPhoto {
  fileName: string;
  webPath?: string;
}

const Home: React.FC = () => {
  const [images, setImages] = useState<UserPhoto[]>([]);

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    const userPhoto: UserPhoto = {
      fileName: Date.now() + photo.format,
      webPath: photo.webPath,
    };
    setImages((prev) => [...prev, userPhoto]);
    console.log("새로운 사진 추가됨!");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HOME</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse={"condense"}>
          <IonToolbar>
            <IonTitle size={"large"}>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            {images.map((image) => (
              <IonCol
                key={image.fileName}
                size={"4"}
                className={"ion-text-center"}
              >
                <img
                  src={image.webPath}
                  alt="image"
                  height={200}
                  style={{ objectFit: "cover" }}
                />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonFab vertical={"bottom"} horizontal={"center"} slot={"fixed"}>
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;

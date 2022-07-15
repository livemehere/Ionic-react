import {
  IonActionSheet,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonModal,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonAlert,
  useIonModal,
} from "@ionic/react";
import { caretForwardCircle, close, heart, share, trash } from "ionicons/icons";
import React, { useState } from "react";

const Settings: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const [showModal, setShowModal] = useState(false);
  const [showActionSheet, setShowActionSheet] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse={"condense"}>
          <IonToolbar>
            <IonTitle size={"large"}>SETTINGS</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol size={"12"} className={"ion-text-center"}>
              <IonButton
                style={{ width: "200px" }}
                onClick={() =>
                  presentAlert({
                    header: "Alert",
                    subHeader: "Important message",
                    message: "This is an alert!",
                    buttons: [
                      {
                        text: "Cancel",
                        role: "cancel",
                        handler: () => {
                          console.log("Alert canceled");
                        },
                      },
                      {
                        text: "OK",
                        role: "confirm",
                        handler: () => {
                          console.log("Alert confirmed");
                        },
                      },
                    ],
                  })
                }
              >
                Alert!
              </IonButton>
            </IonCol>
            <IonCol size={"12"} className={"ion-text-center"}>
              <IonButton
                style={{ width: "200px" }}
                onClick={() => setShowModal(true)}
              >
                Modal!
              </IonButton>
            </IonCol>
            <IonCol size={"12"} className={"ion-text-center"}>
              <IonButton
                style={{ width: "200px" }}
                onClick={() => setShowActionSheet(true)}
              >
                Show Actions Sheet!
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonModal isOpen={showModal}>
        <div>Hello!</div>
        <IonButton onClick={() => setShowModal(false)}>닫기</IonButton>
      </IonModal>
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        cssClass="my-custom-class"
        buttons={[
          {
            text: "Delete",
            role: "destructive",
            icon: trash,
            id: "delete-button",
            data: {
              type: "delete",
            },
            handler: () => {
              console.log("Delete clicked");
            },
          },
          {
            text: "Share",
            icon: share,
            data: 10,
            handler: () => {
              console.log("Share clicked");
            },
          },
          {
            text: "Play (open modal)",
            icon: caretForwardCircle,
            data: "Data value",
            handler: () => {
              console.log("Play clicked");
            },
          },
          {
            text: "Favorite",
            icon: heart,
            handler: () => {
              console.log("Favorite clicked");
            },
          },
          {
            text: "Cancel",
            icon: close,
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            },
          },
        ]}
      />
    </IonPage>
  );
};

export default Settings;

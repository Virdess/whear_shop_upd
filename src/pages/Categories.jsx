import { IonContent, IonHeader, IonLabel, IonNote, IonPage, IonRouterLink, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { capitalize, productInfo } from '../utils';

import styles from "./Categories.module.scss";

const Categories = () => {

  const categories = Object.keys(productInfo);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Интернет Магазин</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
          <IonTitle size="large" className="page-title">
              <IonLabel>Интернет</IonLabel>
              <IonNote>Магазин</IonNote>
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonRow>
          {categories.map(category => (
            <IonRouterLink routerLink={`/categories/${category.toLowerCase()}`}>
              <div className={styles.categoryContainer}>
                <img src={productInfo[category].coverImage} alt="cover" />
                <p>{capitalize(productInfo[category].catName)}</p>
              </div>
            </IonRouterLink>

            // <IonButton key={c} routerLink={`/categories/${c.toLowerCase()}`}>{capitalize(c)}</IonButton>
          ))}
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Categories;

import { Component } from '@angular/core';
import{Camera, CameraOptions} from '@ionic-native/camera/ngx';
import{Geolocation} from '@ionic-native/geolocation/ngx';
import{Router} from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myPhoto;
  myPosition;
  constructor(private camera: Camera, private geolocation: Geolocation, private router: Router, private storage:Storage) {}

  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
 
    this.camera.getPicture(options).then(
      (imageData) => {
        this.myPhoto= 'data:image/jpeg;base64,'+imageData;
        console.log('data:image/jpeg;base64,' + imageData);
      },
      (error) => {
        console.log(error);
      }
    );
  }


  penGallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    };
 
    this.camera.getPicture(options).then(
      (imageData) => {
        this.myPhoto = 'data:image/jpeg;base64,' + imageData;
        console.log('data:image/jpeg;base64,' + imageData);
      },
      (error) => {
        console.log(error);
      }
    );
  }


  getGeolocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);
      this.myPosition='Minha posição é'+resp.coords.latitude+'e a longitude é'+ resp.coords.longitude;
     }).catch((error) => {
      console.log(error);
     });
  }

  changePage()
  {
    this.router.navigateByUrl('/pokemons');
  }
   ngOnInit(){
      // this.storage.set('word','aaaaaa');
      // this.storage.set('json',{id: 1, nome:'json'});
    this.storage.get('word').then ((val)=>{
      console.log(val);
    });

    this.storage.get('json').then ((val)=>{
      console.log(val);
    });

   }

   
 
}

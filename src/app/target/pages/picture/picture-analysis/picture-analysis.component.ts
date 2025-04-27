import { take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/target/service/image.service';
import { AuthService } from 'src/app/target/service/auth.service';

@Component({
  selector: 'app-picture-analysis',
  templateUrl: './picture-analysis.component.html',
  styleUrls: ['./picture-analysis.component.scss']
})
export class PictureAnalysisComponent implements OnInit {
  filesAccessAllowed: boolean;
  permissionDialog: boolean;

  constructor(private router: Router, private imageService: ImageService, private authService: AuthService) {
    this.filesAccessAllowed = false;
    this.permissionDialog = false;
  }

  ngOnInit(): void {
    this.authService.getUserInfo().subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  takePicture() {
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      video.srcObject = stream;
      video.play();

      video.addEventListener('click', () => {
        if (context) {
          context.drawImage(video, 0, 0, 640, 480);
          video.srcObject = null;
          stream.getTracks().forEach(track => track.stop());

          canvas.toBlob((blob) => {
            const formData = new FormData();
            formData.append('aiModel', '1');
            formData.append('formFile', blob as Blob);

            this.imageService.sendImageAsync(formData).subscribe({
              next: (res: any) => {
                this.permissionDialog = false;
                this.router.navigate([`resultados/${res.reportId}`]);
              },
              error: (error: any) => {
                console.log(error);
              }
            });
          }, 'image/jpeg');
        }
      });
    }).catch((error) => {
      console.log('Error accessing camera: ', error);
    });
  }

  getPicture(inputFile: HTMLInputElement) {
    inputFile.click();
  }

  allowGalleryAccess(inputFile: HTMLInputElement) {
    inputFile.click();
  }

  submitImage(image: any) {
    const formData = new FormData();
    formData.append('aiModel', '1')
    formData.append('formFile', image.target.files[0]);

    console.log(image.target.files[0])

    this.imageService.sendImageAsync(formData).subscribe({
      next: (res: any) => {
        this.permissionDialog = false;
        this.router.navigate([`resultados/${res.reportId}`]);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}

import { Component } from '@angular/core';
import { UploadImageModel } from 'src/app/shared/models/upload-image.model';
import { ImageUploadService } from 'src/app/shared/services/image-upload.service';

@Component({
  selector: 'app-upload-image-page',
  templateUrl: './upload-image-page.component.html',
  styleUrls: ['./upload-image-page.component.scss']
})
export class UploadImagePageComponent {

  fileToUpload: any;

  imageUrl = 'https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg';

  constructor(
    private imageUploadService: ImageUploadService
  ) { }

  private uploadImagetoStorageContainer(): void {
    const newImageData = new UploadImageModel();
    newImageData.image = this.fileToUpload;
    newImageData.local = 'testelocal';
    newImageData.name = 'nameImg' + this.getTimeLocal();

    this.imageUploadService.uploadImage(newImageData).then((result) => {
      const urlForSave = this.imageUploadService.api + result.path;
      this.saveImageUrl(urlForSave);
    }, (error: any) => console.error(error));
  }

  private saveImageUrl(urlForSave: string): void {
    console.log('urlForSave', urlForSave);
    // TODO: salvar no banco
  }

  private getTimeLocal(): string {
    return '-' + new Date().getTime();
  }

  fileChangeEvent(fileInput: any): void {
    this.fileToUpload = fileInput.target.files[0];
  }

  save(): void {
    if (this.fileToUpload) {
      this.uploadImagetoStorageContainer();
      return;
    }

    console.log('Sem arquivo para salvar');
  }

}

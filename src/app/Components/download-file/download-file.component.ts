import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DownloadService } from 'src/app/Services/download.service';

@Component({
  selector: 'app-download-file',
  templateUrl: './download-file.component.html',
  styleUrls: ['./download-file.component.css'],
})
export class DownloadFileComponent implements OnInit {
  imageUrl!: string;
  selectedFile!: File;
  saveFileForm: any;
  lstFileDetails: any;

  @ViewChild('resume', { static: true }) resume: any;
  @ViewChild('logoInput', { static: true }) logoInput: any;

  constructor(private dls: DownloadService,private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.imageUrl='./assets/user-solid.svg';
    this.saveFileForm=this.formBuilder.group({
      userName:['',[Validators.required]]
    });
  }
  onSubmit() {
    if(this.saveFileForm.invalid){
      return;
    }
    let formData=new FormData();
    formData.append('ImageUpload',this.logoInput.nativeElement.files[0]);
    formData.append('FileUpload',this.resume.nativeElement.files[0]);
    formData.append('UesrName',this.saveFileForm.value.userName);
    console.log(formData);

  }
  onSelectFile(event:any) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.files);

  }
  downloadImage(event: any) {
    console.log(event);
  }
  downloadDocFile(event: any) {}
}

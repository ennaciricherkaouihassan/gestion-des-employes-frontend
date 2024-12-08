import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {AuthService} from '../controller/service/auth.service';
import {HttpClient} from '@angular/common/http';
import {User} from "../controller/modal/user.model";
import {FilesService} from "../controller/service/files.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isLogoutVisible = false;
  isUsestatutModalOpen = false;
  role: string = 'USER'; // Valeur par défaut
  profileImageUrl: string = '/assets/images/default-profile.png';
  selectedFile: File | null = null;
  activeButton: number | null = null;
  user: User | null = null;

  @ViewChild('fileInput', {static: false}) fileInput!: ElementRef;

  constructor(private authService: AuthService,
              private router: Router,
              private fileService: FilesService) {
  }

  ngOnInit(): void {
    // Assurez-vous que le rôle est récupéré correctement lors de l'initialisation
    this.user = this.authService.getUser();
    this.role = this.user?.role || 'USER'; // Valeur par défaut si rôle non défini
    console.log(this.role);
  }

  toggleLogoutButton(): void {
    this.isLogoutVisible = !this.isLogoutVisible;
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImageUrl = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
      this.onUploadProfileImage()
    }
  }

  onUploadProfileImage(): void {
    if (this.selectedFile) {
      console.log(this.selectedFile)
      let formData = new FormData();
      formData.append('file', this.selectedFile);
      console.log(formData.get('file')); // Check if FormData contains the file

      this.fileService.updateUserProfile(formData, this.user?.id)
        .subscribe(res => {
          console.log(res)
          // @ts-ignore
          this.user.avatar = res
          // @ts-ignore
          this.authService.setUser(this.user)
        }, error => {
          console.error(error)
        })
    }
  }

  logout(): void {
    this.authService.logout()
    this.router.navigate(['/login'])

  }

  setActiveButton(buttonIndex:number): void {
    this.activeButton = buttonIndex;
  }
}

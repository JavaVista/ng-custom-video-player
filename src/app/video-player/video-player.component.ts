import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, AfterViewInit {
  @ViewChild('video')
  video!: ElementRef;
  @ViewChild('videoControls')
  videoControls!: ElementRef;

  constructor() { }

  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
    this.checkVideoWorks();
  }

  checkVideoWorks() {
    const videoWorks = !!document.createElement('video').canPlayType;
    if (videoWorks) {
      this.video.nativeElement.controls = false;
      this.videoControls.nativeElement.classList.remove('hidden');
    }
  }
}

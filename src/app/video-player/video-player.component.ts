import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, AfterViewInit {
  @ViewChild('video')
  video!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoControls')
  videoControls!: ElementRef<HTMLElement>;
  @ViewChild('play')
  play!: ElementRef<HTMLElement>;
  hide: boolean;

  constructor() {
    this.hide = true;
    
  }

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

  togglePlay() {
    if (this.video.nativeElement.paused || this.video.nativeElement.ended) {
      this.play.nativeElement.setAttribute('data-title', 'Pause (k)');
      this.video.nativeElement.play();
      this.hide = false;
    } else {
      this.play.nativeElement.setAttribute('data-title', 'Play (k)');
      this.video.nativeElement.pause();
      this.hide = true;
    }
  }
}

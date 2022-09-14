import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  status:string = 'checking'

  title = 'Angular-WebMidi';

  midiAccess!:WebMidi.MIDIAccess;

  constructor () {

    this.initMIDI();

  }

  initMIDI = () => {
  
    if ( navigator.requestMIDIAccess ) {
    
      navigator.requestMIDIAccess( {sysex: true, software:true } as any )
      .then( this.onMIDISuccess, this.onMIDIFailure );
    
    } else {
    
      this.status = 'WebMidi is not supported';
    
    }
  
  }

  onMIDISuccess = ( midiAccess:WebMidi.MIDIAccess ) => {

    this.midiAccess = midiAccess;

    this.status = 'success';

  }

  onMIDIFailure = ( e:any ) => this.status = 'failed';

}


import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{

  messages: any[] = [];
  chat: any = {};
  loading: boolean = false;
  
  public messageForm = new FormGroup({
    prompt: new FormControl('')
  });
  
  constructor(private chatService: ChatService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.chatService.getChat(this.route.snapshot.params['id']).subscribe((data: any) => {
      this.messages = data.messages;
      this.chat = data;
   
    });
  }

  
  createMessage(): void {
    
    this.loading = true;
    this.chatService.createMessage(this.route.snapshot.params['id'], this.messageForm.value.prompt || "" ).subscribe((data: any) => {
      
      this.loading = false;
      this.messageForm.reset();
      this.ngOnInit();
    });

  }


}

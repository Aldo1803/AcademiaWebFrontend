import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.css'
})
export class ChatsComponent implements OnInit{
  
  chats: any[] = [];

  constructor(private chatService: ChatService) { }
  
  ngOnInit(): void {
    this.chatService.getChats().subscribe((data: any) => {
      this.chats = data;
      
    });
  }

  deleteChat(id: string): void {
    this.chatService.deleteChat(id).subscribe((data: any) => {
      
      this.ngOnInit();
    });
  }

  createChat(): void {
    this.chatService.createChat().subscribe((data: any) => {
     
      
      this.ngOnInit();
    });
  }

}

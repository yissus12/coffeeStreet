import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-chatbot',
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.html',
  styleUrls: ['./chatbot.css']
})
export class Chatbot implements OnInit {
  @ViewChild('messagesContainer', { static: false }) messagesContainer!: ElementRef<HTMLElement>;

  open = false;
  messageText = '';
  isTyping = false;

  messages: Array<{ from: 'user' | 'bot'; text: string; ts?: number }> = [];

  options = [
    { text: 'Ver menú completo', response: 'Nuestro menú: Espresso, Americano, Cappuccino, Latte, Moka, Té. ¿Quieres ver precios?' },
    { text: '¿Dónde están ubicados?', response: 'Nos encontramos en Ctra. Panamericana Sur Km 16, Villa el Salvador. Horario: 7:00 - 22:00.' }
  ];

  ngOnInit(): void {
    this.loadMessages();
    if (!this.messages || this.messages.length === 0) {
      this.messages = [{ from: 'bot', text: '¡Hola! Soy CoffeeBot. ¿En qué puedo ayudarte hoy?', ts: Date.now() }];
      this.saveMessages();
    }
    this.open = false;
  }

  toggle(): void {
    this.open = !this.open;
    if (this.open) this.scrollToBottom();
  }

  selectOption(opt: { text: string; response: string }) {
    this.pushUser(opt.text);
    this.fakeReply(opt.response, 600);
  }

  sendMessage() {
    const text = (this.messageText || '').trim();
    if (!text) return;
    this.pushUser(text);
    this.messageText = '';

    const lower = text.toLowerCase();
    let reply = 'Gracias por tu mensaje. Te contactaremos pronto.';
    if (lower.includes('precio') || lower.includes('precios')) reply = 'Precios: Espresso S/5, Cappuccino S/8, Latte S/9.';
    else if (lower.includes('menu') || lower.includes('menú')) reply = 'Tenemos Espresso, Cappuccino, Latte, Moka y opciones sin lactosa.';
    else if (lower.includes('ubic') || lower.includes('donde') || lower.includes('ubicados')) reply = 'Estamos en Ctra. Panamericana Sur Km 16, Villa el Salvador. ¡Te esperamos!';

    this.fakeReply(reply, 800);
  }

  clearChat() {
    this.messages = [];
    this.saveMessages();
  }

  private pushUser(text: string) {
    this.messages.push({ from: 'user', text, ts: Date.now() });
    this.saveMessages();
    this.scrollToBottom();
  }

  private fakeReply(text: string, delay = 700) {
    this.isTyping = true;
    this.scrollToBottom();
    setTimeout(() => {
      this.isTyping = false;
      this.messages.push({ from: 'bot', text, ts: Date.now() });
      this.saveMessages();
      this.scrollToBottom();
    }, delay);
  }

  private saveMessages() {
    try {
      localStorage.setItem('coffeeBot_messages_v1', JSON.stringify(this.messages));
    } catch (e) {}
  }

  private loadMessages() {
    try {
      const s = localStorage.getItem('coffeeBot_messages_v1');
      if (s) this.messages = JSON.parse(s);
    } catch (e) {
      this.messages = [];
    }
  }

  private scrollToBottom() {
    setTimeout(() => {
      try {
        const el = this.messagesContainer?.nativeElement;
        if (el) el.scrollTop = el.scrollHeight;
      } catch (e) {}
    }, 60);
  }
}

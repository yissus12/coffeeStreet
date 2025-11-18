import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-s2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './s2.html',
  styleUrls: ['./s2.css']
})
export class S2 {
  showChat = false;

  messages: { text: string; sender: 'bot' | 'user' }[] = [];

  botResponses: { [k: string]: string } = {
    hola: '¡Hola! Bienvenido a Coffee Street ☕ ¿En qué puedo ayudarte?',
    menu: 'Nuestro menú incluye Cappuccino, Vanilla Latte, Espresso y más.',
    precio: 'Los precios varían entre 12 soles y 23 soles según el café.',
    delivery: 'Hacemos delivery en Lima. Puedes revisar la sección Delivery 📦',
    horario: 'Atendemos de lunes a domingo, de 7:00 AM a 10:00 PM.',
    direccion: 'Estamos en Ctra. Panamericana Sur Km 16, Villa el Salvador.',
    contacto: 'Escríbenos a contact.coffeestreet@gmail.com o llámanos al +51 987 654 321.',
    default: 'Lo siento, no entendí 😅. ¿Puedes repetirlo?'
  };

  toggleChat() {
    this.showChat = !this.showChat;
    setTimeout(() => this.scrollMessages(), 0);
  }

  sendMessage(text: string, input?: HTMLInputElement) {
    const t = (text || '').trim();
    if (!t) return;

    this.messages.push({ text: t, sender: 'user' });
    if (input) input.value = '';

    const key = t.toLowerCase();
    const response = this.botResponses[key] || this.botResponses['default'];

    setTimeout(() => {
      this.messages.push({ text: response, sender: 'bot' });
      this.scrollMessages();
    }, 500);

    this.scrollMessages();
  }

  private scrollMessages() {
    setTimeout(() => {
      const el = document.getElementById('chatbot-messages');
      if (el) el.scrollTop = el.scrollHeight;
    }, 0);
  }

}

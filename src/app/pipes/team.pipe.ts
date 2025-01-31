import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teamName',
  standalone: true
})
export class TeamPipe implements PipeTransform {

  transform(teamId: string): string {
    switch (teamId) {
      case "EE":
        return "Elite Eagles";
      case "RR":
        return "Royal Rangers";
      case "AM":
        return "Animals";
      case "DD":
        return "Daredevils";
      case "CR":
        return "Crusaders";
      case "FB":
        return "Fury Bulls";

      default:
        return teamId;
    }
  }

}

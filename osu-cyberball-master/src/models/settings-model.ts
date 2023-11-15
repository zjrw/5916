import { PlayerSettingsModel } from './player-settings-model';
import { CpuSettingsModel } from './cpu-settings-model';

export class SettingsModel {
    player: PlayerSettingsModel = new PlayerSettingsModel();
    computerPlayers: Array<CpuSettingsModel>;

    // Gameplay
    throwCount: number = 10;
    timeLimit: number = 0;
    displayTimeLimit: boolean = false;
    timeLimitText: string = 'Time Limit:';
    ballSpeed: number = 500;

    useSchedule: boolean = false;
    changeColor: boolean = false;
    scheduleHonorsThrowCount: boolean = false;
    schedule?: Map<number, Array<number>>;
    scheduleText:string;


    scheduleArray?: string; // Make schedule optional

    // Graphics
    baseUrl: string = './assets';

    ballSprite: string = 'ball.png';
    ballTint?: string;

    portraitHeight: number = 75;
    portraitPadding: number = 10;

    updateSchedule(useSchedule: boolean) {
        if (useSchedule) {
            // Initialize schedule if it doesn't exist
            this.schedule = this.schedule || new Map<number, Array<number>>();
            this.scheduleText = "";
        } else {
            // Remove the schedule if useSchedule is false
            delete this.scheduleText;
            delete this.schedule;
        }
    }

    get hasPortraits(): boolean | string {
        return this.player.portrait || this.computerPlayers.some(cpu => cpu.portrait);
    }

    // Misc
    chatEnabled: boolean = false;

    gameOverText: string = "Game Over";
    gameOverOpacity: number = 0.5;

    constructor(init?: Partial<SettingsModel>) {
        Object.assign(this, init);
    }
}

export const defaultSettings = new SettingsModel({
    player: new PlayerSettingsModel({
       name: 'Player 1'
    }),
    computerPlayers: [
        new CpuSettingsModel({
            name: 'Player 2'
        }),
        new CpuSettingsModel({
            name: 'Player 3'
        })
    ]
});

import { AnySelectMenuInteraction, ContextMenuCommandBuilder, Interaction, SlashCommandBuilder } from "discord.js";
import Logger from "./util/Logger";
import TrelloClient from "./util/Trello";

export interface ContextMenu {
    menu: ContextMenuCommandBuilder | any,
    execute: (interaction: Interaction) => void
}

export interface BotEvent {
    name: string,
    once?: boolean | false,
    execute: (...args?) => void
}

declare module "discord.js" {
    export interface Client {
        slashCommands: Collection<string, SlashCommand>
        cooldowns: Collection<string, number>
        contextMenus: Collection<string, ContextMenu>
        config: any,
        trello: TrelloClient
        logger: Logger
    }
}
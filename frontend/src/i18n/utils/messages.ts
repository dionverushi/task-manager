import albMessages from '@i18n/generated/al/messages.json';
import engMessages from '@i18n/generated/en/messages.json';

import { Language } from './enums';

export const MESSAGES: Record<Language, Record<string, string>> = {
  [Language.AL]: albMessages,
  [Language.EN]: engMessages,
};

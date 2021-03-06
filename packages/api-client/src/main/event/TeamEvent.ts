/*
 * Wire
 * Copyright (C) 2018 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

import {BackendEvent} from './BackendEvent';

enum TEAM_EVENT {
  CONVERSATION_CREATE = 'team.conversation-create',
  CONVERSATION_DELETE = 'team.conversation-delete',
  CREATE = 'team.create',
  DELETE = 'team.delete',
  MEMBER_JOIN = 'team.member-join',
  MEMBER_LEAVE = 'team.member-leave',
  MEMBER_UPDATE = 'team.member-update',
  UPDATE = 'team.update',
}
interface TeamEvent extends BackendEvent {
  type: TEAM_EVENT;
}

interface TeamConversationCreateEvent extends TeamEvent {
  type: TEAM_EVENT.CONVERSATION_CREATE;
}

interface TeamConversationDeleteEvent extends TeamEvent {
  type: TEAM_EVENT.CONVERSATION_DELETE;
}

interface TeamCreateEvent extends TeamEvent {
  type: TEAM_EVENT.CREATE;
}

interface TeamDeleteEvent extends TeamEvent {
  type: TEAM_EVENT.DELETE;
}

interface TeamMemberJoinEvent extends TeamEvent {
  type: TEAM_EVENT.MEMBER_JOIN;
}

interface TeamMemberLeaveEvent extends TeamEvent {
  type: TEAM_EVENT.MEMBER_LEAVE;
}

interface TeamMemberUpdateEvent extends TeamEvent {
  type: TEAM_EVENT.MEMBER_UPDATE;
}

interface TeamUpdateEvent extends TeamEvent {
  type: TEAM_EVENT.UPDATE;
}

export {
  TEAM_EVENT,
  TeamEvent,
  TeamConversationCreateEvent,
  TeamConversationDeleteEvent,
  TeamCreateEvent,
  TeamDeleteEvent,
  TeamMemberJoinEvent,
  TeamMemberLeaveEvent,
  TeamMemberUpdateEvent,
  TeamUpdateEvent,
};

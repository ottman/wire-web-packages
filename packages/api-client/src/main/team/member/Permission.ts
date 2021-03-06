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

enum Permission {
  ADD_CONVERSATION_MEMBER = 1 << 4,
  ADD_TEAM_MEMBER = 1 << 2,
  CREATE_CONVERSATION = 1 << 0,
  DELETE_CONVERSATION = 1 << 1,
  DELETE_TEAM = 1 << 11,
  GET_BILLING = 1 << 6,
  GET_MEMBER_PERMISSIONS = 1 << 9,
  GET_TEAM_CONVERSATIONS = 1 << 10,
  NONE = 0,
  REMOVE_CONVERSATION_MEMBER = 1 << 5,
  REMOVE_TEAM_MEMBER = 1 << 3,
  SET_BILLING = 1 << 7,
  SET_MEMBER_PERMISSIONS = 1 << 12,
  SET_TEAM_DATA = 1 << 8,
}

export {Permission};

import type { Access } from 'payload'

export const canManageHeader: Access = ({ req: { user } }) => {
  return Boolean(user)
}

export const canReadHeader: Access = () => true

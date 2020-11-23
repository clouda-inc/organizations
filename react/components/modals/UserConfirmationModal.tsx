import React from 'react'
import { ModalDialog } from 'vtex.styleguide'
import { pathOr } from 'ramda'
import { injectIntl } from 'react-intl'

interface Props {
  isOpen: boolean
  isLoading: boolean
  onConfirm: Function
  onClose: Function
  assignment: OrganizationAssignment
  confirmAction: string
  message: string
  intl: any
}

const UserConfirmationModal = ({
  isOpen,
  isLoading,
  onConfirm,
  onClose,
  assignment,
  confirmAction,
  message,
  intl,
}: Props) => {
  return (
    <ModalDialog
      centered
      loading={isLoading}
      confirmation={{
        onClick: () => onConfirm(assignment),
        label: confirmAction,
        isDangerous: true,
      }}
      cancelation={{
        onClick: () => onClose(),
        label: intl.formatMessage({ id: 'store/my-users.button.cancel' }),
      }}
      isOpen={isOpen}
      onClose={() => onClose()}>
      <h1>{confirmAction}</h1>
      <div className="flex flex-column mb5 mt5">
        <div>
          <span>{message}</span>
          <span className="b">{pathOr('', ['email'], assignment)}</span>
        </div>
      </div>
    </ModalDialog>
  )
}

export default injectIntl(UserConfirmationModal)

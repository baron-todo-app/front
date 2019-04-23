import React from 'react'
import _ from 'lodash'
import { Button, Icon, Table } from 'rbx'
import { Task } from '../../../share/graphql.type'
import { RouteComponentProps } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

interface Props {
  list: Task[]
  onClick: RouteComponentProps['history']['push']
  setDoneID: (p: string) => void
  isLoading: boolean
}

export type ListProps = Props

export const List: React.FC<Props> = ({
  list,
  onClick,
  setDoneID,
  isLoading
}) => {
  if (!_.isArray(list) || list.length === 0) {
    return <></>
  }

  const _onClick = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.stopPropagation()
    setDoneID(id)
  }

  return (
    <>
      <Table fullwidth striped>
        <Table.Head>
          <Table.Row>
            <Table.Heading style={{ width: '15%', textAlign: 'center' }} />
            <Table.Heading style={{ width: '30%' }}>タイトル</Table.Heading>
            <Table.Heading>詳細</Table.Heading>
          </Table.Row>
        </Table.Head>
        <Table.Body style={{ cursor: 'pointer' }}>
          {_.map(list, (v, i) => (
            <Table.Row key={i} onClick={() => onClick(v.id.toString())}>
              <Table.Cell>
                <Button
                  onClick={(e: React.MouseEvent<HTMLElement>) =>
                    _onClick(e, v.id.toString())
                  }
                  state={isLoading ? 'loading' : undefined}
                  disabled={isLoading}
                  color={'dark'}
                >
                  <Icon>
                    <FontAwesomeIcon icon={faCheck} />
                  </Icon>
                </Button>
              </Table.Cell>

              <Table.Cell style={{ verticalAlign: 'middle' }}>
                {v.title}
              </Table.Cell>
              <Table.Cell style={{ verticalAlign: 'middle' }}>
                {v.body}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  )
}

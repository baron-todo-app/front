import React from 'react'
import { Input } from '../../atoms/Input'
import { Button, IButton } from '../../atoms/Button'
import { Control, Field, Column } from 'rbx'

export type ISearch = IButton

export const Search: React.FC<ISearch> = () => (
  <>
    <Column.Group centered>
      <Column size={10}>
        <Field kind="group">
          <Control expanded>
            <Input size={'large'} placeholder={'検索ワード'} />
          </Control>

          <Control>
            <Button color={'primary'} size={'large'}>
              検索
            </Button>
          </Control>

          <Control>
            <Button color={'info'} size={'large'}>
              追加
            </Button>
          </Control>
        </Field>
      </Column>
    </Column.Group>
  </>
)

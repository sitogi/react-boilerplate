/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { jsx } from '@emotion/core';
import capitalize from 'lodash/capitalize';
import { List } from 'semantic-ui-react';

import { listItem } from 'components/common/list';

const companies = ['facebook', 'airbnb', 'netflix'];

const Companies: FC = () => (
  <div>
    <List celled relaxed>
      {companies.map(companyName => (
        <List.Item css={listItem} key={companyName}>
          <List.Icon name="users" size="large" verticalAlign="middle" />
          <List.Content>
            <Link to={`/${companyName}/members`}>{capitalize(companyName)}のメンバー</Link>
          </List.Content>
        </List.Item>
      ))}
    </List>
  </div>
);

export default Companies;

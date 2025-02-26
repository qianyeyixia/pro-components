import type { ReactText } from 'react';
import React, { useState } from 'react';
import { Progress, ConfigProvider } from 'antd';
import ProList from '@ant-design/pro-list';

const dataSource = [
  {
    title: '语雀的天空',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
];

export default () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<ReactText[]>([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: ReactText[]) => setSelectedRowKeys(keys),
  };

  return (
    <ConfigProvider prefixCls="qixian-pro">
      <ProList<{ title: string }>
        metas={{
          title: {},
          description: {
            render: () => {
              return 'Ant Design, a design language for background applications, is refined by Ant UED Team';
            },
          },
          avatar: {},
          extra: {
            render: () => (
              <div
                style={{
                  minWidth: 200,
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <div
                  style={{
                    width: '200px',
                  }}
                >
                  <div>发布中</div>
                  <Progress percent={80} />
                </div>
              </div>
            ),
          },
          actions: {
            render: () => {
              return [<a key="init">邀请</a>, '发布'];
            },
          },
        }}
        rowKey="title"
        headerTitle="支持选中的列表"
        rowSelection={rowSelection}
        dataSource={dataSource}
      />
    </ConfigProvider>
  );
};

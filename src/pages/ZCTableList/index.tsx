/* eslint-disable react-hooks/rules-of-hooks */
import { Modal } from 'antd';
import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { getData } from './service';
import { TableListItem } from './data.d';


const TableList: React.FC<{}> = () => {
  const actionRef = useRef<ActionType>();

  const [showData, useShowData] = useState('')


  const columns: ProColumns<TableListItem>[] = [
    {
      title: '序号',
      valueType: 'index',
      hideInSearch: true
    },
    {
      title: '发布日期',
      dataIndex: 'pubtime',
      hideInSearch: true
    },
    {
      title: '标签',
      dataIndex: 'tagno',
      hideInSearch: true
    },
    {
      title: '文章标题',
      dataIndex: 'title',
      hideInSearch: true
    },
    {
      title: '文章内容',
      dataIndex: 'content',
      hideInSearch: true,
      render: (_, record, val) => {
        console.log("_", _, 'rec', record, 'val', val)
        const { content } = record
        return (
          <a onClick={() => { useShowData(content) }}>点击查看详情</a>
        )
      }
    },

  ]

  return (
    <>
      <PageContainer>
        <ProTable<TableListItem>
          options={false}
          headerTitle="政策数据"
          rowKey='_id'
          columns={columns}
          actionRef={actionRef}
          request={(params, sorter, filter) => getData({ ...params, sorter, filter })}
        />
      </PageContainer>
      <Modal
        destroyOnClose
        title="政策详情"
        width='700'
        visible={Boolean(showData)}
        onCancel={() => useShowData('')}
        footer={null}>
        <div dangerouslySetInnerHTML={{ __html: showData }} />
      </Modal>
    </>
  );
};

export default TableList;

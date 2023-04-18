import { Col, Row, Typography, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';

const { Title } = Typography;

interface DataType {
  key: string;
  titulo: string;
  descricao: string;
  prazo_entrega: string;
  entrega_concluida: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Titulo',
    dataIndex: 'titulo',
    key: 'titulo',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Descrição',
    dataIndex: 'descricao',
    key: 'descricao',
  },
  {
    title: 'Prazo Entrega',
    dataIndex: 'prazo_entrega',
    key: 'prazo_entrega',
  },
  {
    title: 'Entrega Comcluída',
    dataIndex: 'entrega_concluida',
    key: 'entrega_concluida',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Editar {record.key}</a>
        <a>Delete {record.key} </a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    titulo: 'John Brown',
    descricao: '32',
    entrega_concluida: 'New York No. 1 Lake Park',
    prazo_entrega: "",
  },
  {
    key: '2',
    titulo: 'John Brown',
    descricao: '32',
    entrega_concluida: 'New York No. 1 Lake Park',
    prazo_entrega: "",
  },
  {
    key: '3',
    titulo: 'John Brown',
    descricao: '32',
    entrega_concluida: 'New York No. 1 Lake Park',
    prazo_entrega: "",
  },
  {
    key: '3',
    titulo: 'John Brown',
    descricao: '32',
    entrega_concluida: 'New York No. 1 Lake Park',
    prazo_entrega: "",
  },
  {
    key: '3',
    titulo: 'John Brown',
    descricao: '32',
    entrega_concluida: 'New York No. 1 Lake Park',
    prazo_entrega: "",
  },
  {
    key: '3',
    titulo: 'John Brown',
    descricao: '32',
    entrega_concluida: 'New York No. 1 Lake Park',
    prazo_entrega: "",
  },
  {
    key: '3',
    titulo: 'John Brown',
    descricao: '32',
    entrega_concluida: 'New York No. 1 Lake Park',
    prazo_entrega: "",
  },
  {
    key: '3',
    titulo: 'John Brown',
    descricao: '32',
    entrega_concluida: 'New York No. 1 Lake Park',
    prazo_entrega: "",
  },
  {
    key: '3',
    titulo: 'John Brown',
    descricao: '32',
    entrega_concluida: 'New York No. 1 Lake Park',
    prazo_entrega: "",
  },
  {
    key: '3',
    titulo: 'John Brown',
    descricao: '32',
    entrega_concluida: 'New York No. 1 Lake Park',
    prazo_entrega: "",
  },
  {
    key: '3',
    titulo: 'John Brown',
    descricao: '32',
    entrega_concluida: 'New York No. 1 Lake Park',
    prazo_entrega: "",
  },
  {
    key: '3',
    titulo: 'John Brown',
    descricao: '32',
    entrega_concluida: 'New York No. 1 Lake Park',
    prazo_entrega: "",
  },
  {
    key: '3',
    titulo: 'John Brown',
    descricao: '32',
    entrega_concluida: 'New York No. 1 Lake Park',
    prazo_entrega: "",
  },
  {
    key: '3',
    titulo: 'John Brown',
    descricao: '32',
    entrega_concluida: 'New York No. 1 Lake Park',
    prazo_entrega: "",
  },
];

function App() {

   
  
  return (
    <>
    <Row>
      <Col span={8}></Col>
      <Col span={8}>
          <Typography> 
            <Title>Gerenciamento de tarefas</Title>
        </Typography>        
      </Col>
      <Col span={8}></Col>
    </Row>
    <Row>
      <Col span={4}></Col>
      <Col span={16}>
         <Table columns={columns} dataSource={data} />
      </Col>
      <Col span={4}></Col>
    </Row>
    </>
  )
}

export default App

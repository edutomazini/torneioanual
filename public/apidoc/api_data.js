define({ "api": [
  {
    "type": "Get",
    "url": "/api/v1/jogador",
    "title": "Consultar Jogadores",
    "version": "0.0.1",
    "group": "Jogador",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>querystring; id do jogador</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 9,\n   \"nome\": \"juca\",\n   \"cpf\": \"11578855111\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Falha ao consultar jogador.",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/rest/jogador.js",
    "groupTitle": "Jogador",
    "name": "GetApiV1Jogador"
  },
  {
    "type": "Post",
    "url": "/api/v1/jogador",
    "title": "Gravar Jogadores",
    "version": "0.0.1",
    "group": "Jogador",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>nome do jogador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cpf",
            "description": "<p>cpf do jogador</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 9,\n   \"nome\": \"juca\",\n   \"cpf\": \"11578855111\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Falha ao gravar jogador.",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/rest/jogador.js",
    "groupTitle": "Jogador",
    "name": "PostApiV1Jogador"
  },
  {
    "type": "Get",
    "url": "/api/v1/etapa",
    "title": "Consultar etapas",
    "version": "0.0.1",
    "group": "etapa",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>querystring; id da etapa</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 9,\n   \"nome\": \"etapa 1\",\n   \"created_at\": \"2019-07-03T05:39:36.000Z\",\n   \"updated_at\": \"2019-07-03T05:39:36.000Z\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Falha ao consultar etapa.",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/rest/etapa.js",
    "groupTitle": "etapa",
    "name": "GetApiV1Etapa"
  },
  {
    "type": "Post",
    "url": "/api/v1/etapa",
    "title": "Gravar etapas",
    "version": "0.0.1",
    "group": "etapa",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>nome do etapa</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 9,\n   \"nome\": \"etapa 1\",\n   \"created_at\": \"2019-07-03T05:39:36.000Z\",\n   \"updated_at\": \"2019-07-03T05:39:36.000Z\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Falha ao gravar etapa.",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/rest/etapa.js",
    "groupTitle": "etapa",
    "name": "PostApiV1Etapa"
  },
  {
    "type": "Get",
    "url": "/api/v1/torneio",
    "title": "Consultar torneios",
    "version": "0.0.1",
    "group": "torneio",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>querystring; id do torneio</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 9,\n   \"nome\": \"torneio anual\",\n   \"created_at\": \"2019-07-03T05:39:36.000Z\",\n   \"updated_at\": \"2019-07-03T05:39:36.000Z\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Falha ao consultar torneio.",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/rest/torneio.js",
    "groupTitle": "torneio",
    "name": "GetApiV1Torneio"
  },
  {
    "type": "Post",
    "url": "/api/v1/torneio",
    "title": "Gravar torneios",
    "version": "0.0.1",
    "group": "torneio",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>nome do torneio</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 9,\n   \"nome\": \"torneio anual\",\n   \"created_at\": \"2019-07-03T05:39:36.000Z\",\n   \"updated_at\": \"2019-07-03T05:39:36.000Z\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Falha ao gravar torneio.",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/rest/torneio.js",
    "groupTitle": "torneio",
    "name": "PostApiV1Torneio"
  }
] });

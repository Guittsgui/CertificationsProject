export type Question = {
    question: string,
    answers: string[],
    rightAnswers: number | number[]
}

export const s1: Question[] = [
    {
        question: "Uma empresa planeja usar um dispositivo Amazon SnowBall Edge para transferir arquivos para a nuvem AWS. Quais atividades relacionadas a um dispositivo SnowBallEdge estão disponíveis gratuitamente para a empresa? ",
        answers:[
            "Uso do dispositivo SnowBall Edge por um período de 10 dias",
            "A transferencia de dados do Amazon S3 para o dispositivo SnowBallEdge",
            "A transferencia de dados do dispositivo SnowBallEdge para o AmazonS3",
            "Uso diário do dispositivio SnowBallEdge após 10 dias"
        ],
        rightAnswers: 2
    },
    {
        question: "Uma empresa implantou aplicativos em instancias do Amazon EC2. A empresa precisa avaliar as vulnerabilidades das aplicacoes e identificar implantacoes de infraestrutura que nao atendam as melhores práticas. Qual servico AWS a empresa pode usar para entender esses requisitos ?",
        answers:[
            "AWS Trusted Advisor",
            "Amazon Inspector",
            "AWS Config",
            "Amazon Guard Duty"
        ],
        rightAnswers: 1
    },
    {
        question: "Uma empresa possui um grupo centralizado de usuários com grandes requisitos de armazenamento de arquivos que excederam o espaço disponível no local. A empresa deseja ampliar seus recursos de armazenamento de arquivos para esse grupo, mantendo ao mesmo tempo o benefício do desempenho do compartilhamento local de conteúdo. Qual é a solucao AWS mais eficiente operacionalmente para este cenário ? ",
        answers:[
            "Create an Amazon S3 Bucket for each user. Mount each bucket by using an s3 file system mounting utility",
            "Configure and deploy an AWS Storage Gateway file gateway. Connect each user's workstation to the file gateway.",
            "Move each user's working environment to Amazon WorkSpaces. Set up an Amazon WorkDocs account for each user.",
            "Deploy an Amazon EC2 instance and attach an EBS Provisioned IOPS volume. Share the EBS volume directly with the users."
        ],
        rightAnswers: 1
    },
    {
        question: "De acordo com as práticas recomendadas de segurança, como uma instancia EC2 deve receber acesso a um bucket do Amazon S3?",
        answers:[
            "Hard code an IAM user's secret key and access key directly in the application and upload the file",
            "Store the IAM user's secret key and access key in a text file on the EC2 instance, read the keys, then upload the file",
            "Have the EC2 instance assume a role to obtain the privileges to upload the file",
            "Modify the S3 Bucket policy so that any service can upload to it at any time",
        ],
        rightAnswers: 2
    },
    {
        question: "Qual opcao é de responsabilidade do cliente ao usar o amazon DYNAMODB no modelo de responsabilidade compartilhada da AWS? ",
        answers:[
            " Physical Security of DynamoDB",
            "Patching of DynamoDB",
            "Access to DynamoDB tables",
            "Encryption of data at rest in DynamoDB"
        ],
        rightAnswers: 2
    },
    {
        question: "Qual opcao é uma perspectiva que inclui recursos básicos do AWS Cloud Adoption Framework (CAF)",
        answers:[
            "Sustainability",
            "Performance Efficiency",
            "Governance",
            "Reliability"
        ],
        rightAnswers: 2
    },
    {
        question: "Uma empresa está executando e gerenciando o seu próprio ambiente Docker em instancias do Amazon EC2. A empresa deseja uma alternativa para ajudar a gerenciar o tamanho do cluster, a programacao e também a manutencao do ambiente. Qual servico da aws atende?",
        answers:[
            "AWS Lambda",
            "Amazon RDS",
            "AWS Fargate",
            "Amazon Athena"
        ],
        rightAnswers: 2
    },
    {
        question: "Uma empresa deseja executar um banco de dados NOSQL em instancias do Amazon EC2. Qual tarefa é de responsabilidade da AWS neste Cenário ?",
        answers:[
            "Update the guest operating system of the EC2 Instance",
            "Maintain high availability at the database layer",
            "Patch the physical infraescructure that hosts the EC2 instances",
            "Configure the security group firewall"
        ],
        rightAnswers: 2
    },
    {
        question: "Quais servicos ou ferramentas da AWS podem identificar oportunidades de redimensionamento para instancias do Amazon EC2? ESCOLHA DOIS",
        answers:[
            "AWS CostExplorer",
            "AWS Billing Conductor",
            "Amazon CodeGuru",
            "Amazon SageMaker",
            "aws Compute Optimizer"
        ],
        rightAnswers: [0,4]
    },
    {
        question: "Quais das opcoes a seguirt sao benefícios de usar o AWS Trusted Advisor ? ESCOLHA DOIS",
        answers: [
            "Providing high-performance container Orchestration",
            "Creating and Rotating encryption keys",
            "Detecting underuitilized resources to save costs",
            "Improving security by proactively monitoring the AWS Enviroment",
            "Implementing enforced tagging across AWS resources"
        ],
        rightAnswers: [2,3]
    },
    {
        question: "Qual das opcoes a seguir é uma vantagem que os usuários experimentam ao migrar cargas de trabalho locais para a nuvem AWS",
        answers: [
            "Elimination of dispenses for running and maintaining dataCenters",
            "Price discounts that are identical to discounts form hardware providers",
            "Distribution of all operation controls to AWS",
            "Elimination operational expenses"
        ],
        rightAnswers: 0
    },
    {
      question: "Uma empresa deseja gerenciar servicos de TI implantados e governar sua infraestrutura como modelos de código IAC. Qual servico da AWS atenderá esse requisito ?"  ,
      answers: [
        "AWS Resource Explorer",
        "AWS Service Catalog",
        "AWS Organizations",
        "AWS System Manager"
      ],
      rightAnswers: 3
    },
    {
        question: "Qual serviço ou ferramenta da AWS ajuda os usuários a visualizar, compreender e gerenciar gastos e uso ao longo do tempo ?",
        answers: [
            "AWS Organizations",
            "AWS Pricing Calculator",
            "Aws Cost Explorer",
            "AWS Service Catalog"
        ],
        rightAnswers: 2
    },
    {
        question: "Uma empresa está usando uma paltaforma central de dados para gerenciar vários tipos de dados de seus clientes. A empersa deseja usar os Servicos da AWS para descobrir, transformar e visualizar os dados. Qual combinacao de servicos da AWS a empresa deve usar para atender a esses requisitos, ESCOLHA DOIS",
        answers: [
            "AWS Glue",
            "AMAZON Elastic File System",
            "Amazon Redshift",
            "Amazon QuicKsIGHT",
            "Amazon Quantum Ledger Database"
        ],
        rightAnswers: [0,3]
    },
    {
        question: "Uma empresa global deseja migrar seus aplicativos de terceriros para a Nuvem AWS. A empresa deseja a ajuda de uma equipe global de especialistas para concluir a migracao de forma mais rápida e confiável, de acordo com as melhores práticas sugeridas pela AWS. Qual servico da AWS atenderá a esses requisitos ? ",
        answers: [
            "AWS Support",
            "AWS Professional Services",
            "AWS Launch Wizard",
            "Aws Managed Services (AMS)"
        ],
        rightAnswers: 1
    },
    {
        question: "Uma plataforma de E-Learning precisa executar um aplicativo durante 2 meses por ano. O aplicativo será implantado em instancias do AMAZON EC2. Qualquer tempo de inativiadde do aplicativo durante esses 2 meses deve ser evitado. Qual opcao de compra do EC2 atenderá esses requisitos de maneira MAIS ECONOMICA:",
        answers: [ 
            "Reserved Instances",
            "Dedicated HOSTS",
            "Spot Instances",
            "On-Demand Instances"
        ],
        rightAnswers: 3
    },
    {
        question: "Um desenvolvedor deseja implantar um aplicativo rapidamente na AWS sem criar manualmente os recursos necessários. Qual servico da AWS atenderá a esses requisitos ?",
        answers: [
            "Amazon EC2",
            "AWS Elastic Beanstalk",
            "CodeBuild",
            "Amazon Personalize"
        ],
        rightAnswers: 1
    },
    {
        question: "Uma empresa está armazenando dados confidenciais de clientes em um bucket S3. A empresa deseja proteger os dados contra exclusao ou substituicao acideental. Qual o recurso do S3 a empresa deve usar para defender esses requisitos ?",
        answers: [
            "S3 Lifecycle Rules",
            "S3 Versioning",
            "S3 Bucket Polices",
            "S3 ServerSide Encryption"
        ],
        rightAnswers: 1
    },
    {
        question: "Qual servico da AWS oferece a capacidade de gerenciar infraestrutura como código?",
        answers: [ 
            "CodePipeline",
            "CodeDeply",
            "DirectConnect",
            "CloudFormation"
        ],
        rightAnswers: 3
    },
    {
        question: "Uma empresa de jogos online precisa escolher uma opcao de compra para executar suas instancias do Amazon EC2 por 1 ano. O tráfego da web é consistente e a qualquer momento o aumento no tráfego é possível. As instancias EC2 devem estar online e disponiveis sem qualquer interrupcao. qual opcao de compra de instancia do EC2 atenderá esses requisitos de maneira mais economica ?",
        answers: [
            "OnDemand - Instances ",
            "Reserved Instances",
            "Spot Instance",
            "Spot Fleet"
        ],
        rightAnswers: 1
    },
    {
        question: "Qual servico ou recurso da AWS permite que o usuário estabeleca uma conexao de rede dedicada entre o datacenter local e  a nuvem AWS ?",
        answers: [
            "AWS Direct Connect",
            "AWS Peering",
            "AWS VPN",
            "Amazon Route53"
        ],
        rightAnswers: 0
    },
    {
        question: "Qual opcao é uma localizacao física da infra global da AWS?",
        answers: [
            "AWS DataSync",
            "AWS Region",
            "Amazon Connect",
            "AWS Organizations"
        ],
        rightAnswers: 1
    },
    {
        question: "Uma empresa deseja proteger suas informacoes, sistemas e ativos da nuvem AWS enquanto executa tarefas de avaliacao e mitigacao de riscos. Qual pilar do AWS WellArchtectedFramework é apoiado por essas metas?",
        answers: [
            "Reliability",
            "Security",
            "Operational Excelence",
            "Performance Efficiency"
        ],
        rightAnswers: 1
    },
    {
        question: "Qual o proposito de ter um gateway de internet dentro de uma VPC ?",
        answers: [
            "To create a VPN connection to the VPC",
            "To allow communication between the VPC and the Internet",
            "To impose BandWidth constraints on internet Traffic",
            "To load balance traffic "
        ],
        rightAnswers: 1
    },
    {
        question: "Uma empresa está executando um aplicativo local monolítico que não é escalonável e é difícil de manter. A empresa tem um plano para migrar o aplicativo para AWS e dividir o aplicativo em microservicos. Qual a prática recomendada pelo WellArchFrame a empresa está seguindo com este plano ?" ,
        answers: [
            "A integrate functional testing as part AWS Deployment",
            "Use automation to deploy changes",
            "Deploy the application to multiple locations",
            "Implement loosely coupled dependencies"
        ],
        rightAnswers: 3
    },
    {
        question: "Uma empresa possui uma conta AWS. A empresa deseja auditar sua senha e acessar detalhes de rotacao de chaves para fins de conformidade. Quals ervico ou ferramenta da AWS atenderá esse requisito ?",
        answers: [
            "IAM Acces Analyzer",
            "AWS Artifact",
            "IAM Credential Report",
            "AWS Audit Manager"
        ],
        rightAnswers: 2
    },
    {
        question: "Uma empresa deseja receber uma notificacao quando um limite de custo específico da AWS for atingido. Quais servicos ou ferramentas da AWS  a empresa pode usar para atender a esse requisito ? ESCOLHA DOIS",
        answers: [
            "Amazon simple Queue Service (SQS)",
            "AWS Budgets",
            "Cost Explorer",
            "Amazon CloudWatch",
            "AWS Cost and Usage Report"
        ],
        rightAnswers: [1,3]
    },
    {
        question: "Qual servico ou recurso da AWS fornece responstas as perguntas relacionadas a seguranca mais frequente que a AWS recebe de seus usuários:",
        answers: [
            "AWS Artifact",
            "Amazon Connect",
            "AWS ChatBox",
            "AWS Knowledge Center"
        ],
        rightAnswers: 3
    },
    {
        question: "Quais tarefgas são responsábilidades do cliente, de acordo com o modelo de responsabilidade compartilhada da AWS ? ESCOLHA DOIS",
        answers: [
            "Configure the AWS provied security  group Firewall",
            "Classify company assets in the AWS Cloud",
            "Determinate which AZ to use for Amazon S3Bucket",
            "Patch or upgrade Amazon DynamoDB",
            "Select Amazon EC2 instances to run AWS Lambda ON"
        ],
        rightAnswers: [0,1 ]
    },{
        question: "Quais das alternativas a seguir sao pialres do AWS WellArchFramework, ESCOLHA DUAS",
        answers: [
            "Availability",
            "Reliability",
            "Scalability",
            "Responsive Design",
            "Operational Excellence"
        ],
        rightAnswers: [1,4]
    },
    {
        question: "Qual servico ou recurso da AWS é usado para enviar mensagens de texto e email de aplicativos distribuidos ?",
        answers: [
            "Amazon Simple Notification Service (SNS) ",
            "Amazon Simple Email Service (SES)",
            "Amazon CloudWatch Alerts",
            "Amazon Queue Service (SQS)"
        ],
        rightAnswers: 0
    },
    {
        question: "Um usuário precisa de acesso programático aos recursos da AWS por meio da AWS CLI ou da API da AWS. Qual opcao fornecerá o acesso apropriado ? ",
        answers: [
            "Amazon Inspector",
            "Access Keys",
            "SSH Public Key",
            "AWS Key Management Service (KMS)"
        ],
        rightAnswers: 1 
    },
    {
        question: "Uma empresa executa milhares de simulacoes simultaneas usando o AWS BATCH. Cada simulacao nao tem estado, é tolerante a falhas e dura até 3 horas. Qual modelo de precificacao permite a empresa otimizar custos e atender a esses requisitos ? ",
        answers: [
            "Reserved Instances",
            "Spot Instances",
            "On-Demand Instances",
            "Dedicated Instances"
        ],
        rightAnswers: 1
    },
    {
        question: "O que significa o conceito de agilidade na computacao em nuvem AWS? ESCOLHA DOIS",
        answers: [
            "The speed wich AWS Resourrces are Implemented",
            "The speed wich aws creates newS aws regions",
            "The ability to experiment quickly",
            "The elimination of wated capacity",
            "The low cost to entry into cloud computing"
        ],
        rightAnswers: [0,2]
    },
    {
        question: "Uma empresa precisa bloquear os ataques de SQL INJECTION. Qual servico os recursos da AWS pode atender a esse requisito ?",
        answers: [
            "AWS WAF",
            "AWS Shield",
            "Network ACL'S",
            "Security Groups"
        ],
        rightAnswers: 0
    },
    {
        question: "Qual servico ou recurso da AWS identifica-se um bucket do Amazon S3 ou uma funcao do IAM foi compartilhado com uma entidade externa ?",
        answers: [
            "AWS Service Catalog",
            "Aws System Manager",
            "AWS Iam Access Analyzer",
            "Aws Organizations"
        ],
        rightAnswers: 2
    },
    {
        question: "Um profissional de nuvem precisa obter relatórios de conformidade da AWS antes de migrar um ambiente para a nuvem AWS. Como esses relatórios podem ser gerados ?",
        answers: [
            "Contact the AWS Compliance Team ",
            "Download the reports from AWS Artifact ? ",
            "Open a case with AWS Support ?",
            "Generate the reports with Amazon Macie"
        ],
        rightAnswers: 1
    },
    {
        question: "Uma empresa de comércio eletronico migoru sua infra de TI de um data center para a nuvem. Qual custo é de responsabilidade DIRETA da empresa? ",
        answers: [
            "Cost of Application software Licenses",
            "Cost of the hardware infra of AWS",
            "Cost of power for the AWS Servers",
            "Cost of physical security for AWS Server"
        ],
        rightAnswers: 0
    },
    {
        question: "Uma empresa está configurando o IAM em uma conta AWS. Qual recomendacao está em conformidade com as práticas recomendadas de seugrança do IAM ?",
        answers: [
            "Use the account ROOT user access keys for adm & tasks",
            "Grant broad permissions so that all company eployes can access the resources they Need",
            "Turn ou MultiFactor auth (MFA)",
            "Avoid Rotating Credentials to prevent Issues in production Applications"
        ],
        rightAnswers: 2
    },
    {
        question: "A elasticidade na nuvem AWS refere-se a qual das opcoes a seguir ? ESCOLHA DUAS",
        answers: [
            "How quickly an Amazon EC2 Instance can be Restarted",
            "The ability to rightsize resources as demand shifts",
            "The maximum Amount of RAM an Amazon EC2 instance can use",
            "The pay-as-you-go billing model",
            "How easily resources can be procured when they are needed."
        ],
        rightAnswers: [1,4]
    },
    {
        question: "Qual servico permite que os clientes auditem chamadas de API em suas contas AWS?",
        answers: [
            "CloudTrail",
            "Trusted Advisor",
            "Inspector",
            "AWS X-RAY"
        ],
        rightAnswers: 0
    },
    {
        question: "Qual a responsabilidade do cliente ao usar o AWS Lambda de acordo com o modelo de compartilhada da AWS?",
        answers: [
            "Managing the code withn the lambda function",
            "confirming that the hardware is working",
            "Patching the operating System",
            "Sutting down lambda functions"
        ],
        rightAnswers: 0
    },
    {
        question: "Uma empresa possui 5TB de dados armazenados no amazon S3. A empresa planeja ocasionalmente realizar consultas nos dados para análise. Qualservico da AWS a empresa deve usar para executar essas consultas de maneira MAIS economica?",
        answers: [
            "Reshift",
            "Athena",
            "Kinesis",
            "Amazon RDS"
        ],
        rightAnswers: 1
    },
    {
        question: "Qual servico nao tem custo adicional ?",
        answers: [
            "SageMaker",
            "Config",
            "Organizations",
            "CloudWatch"
        ],
        rightAnswers: 2
    },
    {
        question: "Qual servoc da AWS CLOUD Adoption Framework(CAF) pertence a perspectiva das pessoas ?",
        answers: [
            "Data Architecture",
            "Event Management",
            "Cloud Fluency",
            "Strategic Partnership"
        ],
        rightAnswers: 2
    },
    {
        question: "Uma empresa deseja assumir o compromisso inicial de uso contínuo de suas instancias de producao amazon EC2 em troca de um custo geral reduzido. Quais opcoes de precos atendem a resse requisito com o custo mais baixo: ESCOLHA DOIS",
        answers: [
            "Spot Instances",
            "On Demand",
            "Reserved Instances",
            "Saving Plans",
            "Dedicated Hosts"
        ],
        rightAnswers: [ 2,3]
    },
    {
        question: "Uma empresa deseja migrar seus bancos de dados relacionais locais para a nuvem AWS. A empresa pretende utilizar a infraestrutura o mais próximo possível da sua localizacao geográfica atual. Qual servico ou recurso AWS a empresa deve usar para selecionar sua área de implantacao RDS? ",
        answers: [
            "Amazon Connect",
            "AWS WaveLenght",
            "AWS Regions",
            "AWS Direct Connect"
        ],
        rightAnswers: 2
    },
    {
        question:" Uma empresa está explorando o uso da NUVEM AWS e precisa criar uma estimativa de custo para um projeto antes que a infraestrutura seja provisionada. Qual servico ou recurso da AWS pode ser usado para estimar custos antes da implantacao? ",
        answers: [
            "AWS Free Tier",
            "AWS Pricing Calculator",
            "AWS Billing And Cost Management",
            "AWS Cost and Usage Report"
        ],
        rightAnswers: 1
    }
    
    
    
    
    
]

export const s2: Question[] = [
    {
        question: "Uma empresa está construindo um app que precisa entregar imagens e vídeos globalmente com latencia mínima. Qual abordagem a empresa pode usar para conseguir isso de maneira mais economica?",
        answers: [
            "Entregue o conteúdo por meio do Amazon CloudFront",
            "Armazene o conteúdo no Amazon S3 e habilite a replicacao entre regioes do S3",
            "Implementar uma VPN em várias regioes da AWS",
            "Entregue o conteúdo por meio do AWS Privatelink"
        ],
        rightAnswers: 0
    },
    {
        question: " Qual opcao é um benefício das economias de escala baseadas nas vantagens da computacao em nuvem",
        answers: [
            "A capacidade de trocar despesas variáveis por despesas fixas",
            "Maior velocidade e agilidade",
            "Reducao dos custos variáveis em relacao aos custos fixos",
            "Aumento dos custos operacionais em DC"
        ],
        rightAnswers: 2 
    },
    {
        question: "Qual das alternativas a seguir é uma estrutura de desenvolvimento de software que uma empresa pode usar para definir recursos de nuvem como código e provisionar os recursos por meio do AWS CloudFormation ?",
        answers: [
            "AWS CLI",
            "Centro de Desenvolvedores AWS",
            "Kit desenvolvimento de nuvem AWS (AWS CDK)",
            "AWS CodeStar"
        ],
        rightAnswers: 2
    },
    {
        question: "Uma empresa está desenvolvendo um aplicativo que usa vários servicos da AWS. O aplicativo precisa usar credenciais temporárias e com privilégios limitados para autenticação com outras API'S da AWS. Qual servico ou recurso da AWS a empresa deve usar para atender esses requisitos de autenticacao?",
        answers: [
            "Gateway de API da Amazon",
            "Usuários IAM",
            "Servico de Token de Seguranca (STS)",
            "Perfis de Instancia do IAM"
        ],
        rightAnswers: 2
    },
    {
        question: " Qual servico da AWS é um servico de gerenciamento de postura de seguranca na nuvem (CSPM) que agrega alertar de vários servicos da AWS e produtos de parceiros em um formato personalizado?",
        answers: [
            "Hub de seguranca AWS",
            "Consultor Confiável da AWS",
            "Amazon EventBridge",
            "Amazon GuardDuty"
        ],
        rightAnswers: 0
    },
    {
        question: "Qual servico da AWS é sempre fornecido gratuitamente",
        answers: [
            "Amazon S3",
            "AWS Identity Acces Management IAM",
            "Balanceadores de carga elástico",
            "AWS WAF"
        ],
        rightAnswers: 1
    },
    {
        question: "Para reduzir custos uma empresa planeja migrar um banco NOSQL p/ AWS. Qual servico da AWS é totalmente gerenciado e pode dimensionar automaticamente a capacidade de transferencia para atender as demandas de carga de trabalho do banco de dados?",
        answers: [
            "Redshift",
            "Aurora",
            "DynamoDB",
            "AmazonRDS"
        ],
        rightAnswers: 2
    },
    {
        question: "Uma empresa está usando o DynamoDB. Qual tarefa é de responsabilidade da empresa segundo o modelo de compartilhamento da AWS?",
        answers: [
            "Corrija o sistema Operacional",
            "Provisionar Hosts",
            "Gerenciar permissoes de acesso ao banco de dados",
            "Proteja o S.O"
        ],
        rightAnswers: 2
    },
    {
        question: "Uma empresa possui um ambiente de teste. Uma empresa está planejando testar um aplicativo na AWS. O teste do aplicativo pode ser interrompido e nao precisa ser executado continuamente. Qual melhor opcao EC2 atende os requisitos de forma mais economica ?",
        answers: [
            "Instancia sob demanda",
            "Instancias Dedicadas",
            "Instancia Spot",
            "Instancias Reservadas"
        ],
        rightAnswers: 2
    },
    {
        question: " Qual servico aws oferece aos usuarios a capaciadde de descobrir e proteger dados confidenciais armazenados em buckets do Amazon s3 ",
        answers: [
            "Amazon Macie",
            "Detetive Amazon",
            "Amazon GuardDuty",
            "Analisador de acesso AWS IAM"
        ],
        rightAnswers: 0
    },
    {
        question: "Qual dos seguintes servicos pode ser usado para bloquear o tráfego de rede par auma isntancia? ESCOLHA DOIS",
        answers: [
            "Grupo de Seguranca",
            "Logs de Fluxo Amazon VPC",
            "ACL'S de rede",
            "Amazon CloudWatch",
            "AmazonCloudTrail"
        ],
        rightAnswers: [0,2]
    },
    {
        question: "Qual servico AWS pode identificar quando uma instancia Amazon EC2 foi encerrada?",
        answers: [
            "Aws Identity And Acces Management (IAM)",
            "AWS CloudTrail",
            "Aws Comput Optimizer",
            "Amazon EventBridge"
        ],
        rightAnswers: 1
    },
    {
       question: "Qual dos seguintes é um  banco de dados totalmente gerenciado e compatível com MYSQL?",
       answers: [
        "Amazon S3",
        "DynamoDB",
        "Redshift",
        "Aurora"
       ],
       rightAnswers: 3
    },
    {
        question: "Qual servico da AWS oferece suporte a uma arquitetura Híbrida, que oferece aos usuários a capacidade de estender a infraestrutura dda AWS, os servicos da AWS, as API'S, e as ferramentas para data centers, ambientes de colocalizacao ou instalacoes locais?",
        answers: [
            "AWS Snowmobile",
            "Zona locais da AWS",
            "Postos avancados da AWS",
            "AWS Fargate"
        ],
        rightAnswers: 2
    },{
        question: "Qual serviço da AWS pode executar um banco de dados POSTGREEWSSQL gerenciado que fornece processamento de transacoesOnline (OLTP) ",
        answers: [
            "Amazon DynamoDB",
            "Amazon Atena",
            "Amazon RDS",
            "Amazn EMR"
        ],
        rightAnswers: 2
    },
    {
        question: "Uma empresa deseja fornecer Desktops e aplicativos virtuais Windows gerenciados a seus funcionários remotos por meio de conexoes em redes seguras. Quais servicos da AWS a empresa opde usar para atender a esses requisitos? ESCOLHA DOIS",
        answers: [
            "Amazon Connect",
            "Amazon APPStream 2.0",
            "Amazon WorkSpaces",
            "AWS Site-to-Site VPN",
            "Amazon ECS"
        ],
        rightAnswers: [2,3]
    },
    {
        question: "Uma empresa deseja monitorar grupos de seguranca mal configurados que permitem acesso irrestrito a portas específicas. Qual servico AWS atende a esse requisito ?",
        answers: [
            "Consultor Confiavel AWS",
            "Amazon CloudWatch",
            "Amazon GuardDuty",
            "Painel de integridade AWS"
        ],
        rightAnswers: 0
    },
    {
        question: "Qual servico da AWS é um bacno de dados e valor-cahve que fornece latencia inferior a 1ms em grande escala?",
        answers: [
            "DynamoDB",
            "Aurora",
            "DocumentDB",
            "Amazon Netuno"
        ],
        rightAnswers: 0
    },
    {
        question: "Uma empresa está implantando um objeto de pesquisa de aprendizado de máquina (ML). que exigirá muito poder computacional durante vários meses. Os trabalhos de processamento de ML nao precisam ser executados em horários específicos. Qual a opcao de instancia do Amazon EC2 atenderá esses requisitos com o menor cusot? ",
        answers: [
            "On Demand",
            "Spot",
            "Reservadas",
            "Dedicadas"
        ],
        rightAnswers: 0
    },
    {
        question: "Quais servicos ou recursos da AWS oferecem solucoes de recuperacao de desastres para instancias do amazon EC2 ? ESCOLHA DOIS",
        answers: [
            "Instancias reservadas do EC2",
            "Imagens de máquinas Amazon EC2 (AMI'S)",
            "Instantaneos do Amazon Elastic Block Store",
            "Escudo AWS",
            "Amazon GuardDuty"
        ],
        rightAnswers: [1,2]
    },
    {
        question: "Qual servico da AWS fornece acesso a linha de comando ás ferramentas e recursos da AWS diretamente de um navegador da web ?",
        answers: [
            "CloudHSM",
            "CloudShell",
            "WorkSpaces",
            "Mapa da Nuvem AWS"
        ],
        rightAnswers: 1
    },
    {
        question: "Um engenheiro de rede precisa construir uma arquitetura de nuvem híbrida conectando redes locais a nuvem AWS usando o AWS DirectConenct. A empresa possui algumas VPC'S em uma única regiao da AWS e espera aumentar o número de VPC'S para centenas ao longo do tempo. Qual servico ou recurso da AWS o engenheiro deve usar para simplificar e dimensionar essa conectividade á medida que o número de vpc's aumenta? ",
        answers: [
            "VPC EndPoints",
            "AWS Transit Gateway",
            "Rota Amazonica 53",
            "Gerenciador segredos AWS"
        ],
        rightAnswers: 1
    },
    {
        question: "Uma empresa deseja avaliar usa prontidão operacional. Também pretende identificar e mitigar quaisquer riscos operacionais antes do lancamento de um novo produto. Qual plano da AWS Support oferece orientacao e suporte para esse tiop de evento sem custo adicional ?",
        answers: [
            "Suporte comercial AWS",
            "Suoprte Basico AWS",
            "Suporte Desenvolvedor Aws",
            "Suporte Empresarial AWS"
        ],
        rightAnswers: 0
    },
    {
        question: "Uma empresa deseja estabelecer um cronograma para a rotacao das credencias de usuários do banco de dados. Qual servico aws oferecerá esse requisito com menos sobrecarga operacional ?",
        answers: [
            "Gerente de Sistemas AWS",
            "Gerenciador de Segredos AWS",
            "Gerenciador de Liderencas AWS",
            "Servicos gerenciados pela AWS ?"
        ],
        rightAnswers: 1
    },
    {
        question: "Qual servico ou recurso da AWS pode ser usado para criar uma conexao privada entre uma carga de trabalho local e uma carga de trabalho na nuvem aws? ",
        answers: [
            "Route53",
            "Amazon Macie",
            "AWS Direct Connect",
            "Private Link"
        ],
        rightAnswers: 2
    },
    {
        question: "Qual servico AWS é utilizado para fornecer criptografia para o EBS ?",
        answers: [
            "Gerenciador de certificados AWS",
            "Gerenciador de sistemas AWS",
            "AWS Kms ",
            "AWSConfig__"
        ],
        rightAnswers: 2
    },
    {
        question:"Uma empresa deseja gerenciar seus recursos na nuvem AWS por meio de uma interfaceWeb. Qual servico da AWS atenderá a esse requisito ?",
        answers: [
            "Console AWS",
            "AWS CLI",
            "SDK da AWS",
            "Nuvem AWS9"
        ],
        rightAnswers: 0
    },
    {
        question: "Quais das opcoes a seguir sao vantagens da nuvem AWS ? ESCOLHA DOIS",
        answers: [
            "Trocar Despesas variáveis por Despesas de Capital",
            "Elevadas economias de Escala",
            "Lancar globalmente em minitos",
            "Foco no gerenciamento de infra & hardware",
            "superprovisao para garantir capacidade"
        ],
        rightAnswers: [1,2]
    },
    {
        question: "Qual benefício da Nuvem AWS é desmontrado pela capacidade de uma arquitetura de resistir a falhas com tempo de inatividade mínimo ?",
        answers: [
            "Agilidade",
            "Elasticidade",
            "Escalabilidade",
            "Alta Disponibilidade"
        ],
        rightAnswers: 3
    },
    {
        question: "Um desenvolvedor precisa manter uma infra de ambiente de desenvolvimento e uma infra de ambiente de producao de forma repetível. Quais servicos AWS o desenvolvedor deve usar para atender a esses requisitos ?",
        answers: [
            " Estacao Terrestre AWS",
            "Escudo AWS",
            "AWS Iot Device Defender",
            "Aws CloudFormation"
        ],
        rightAnswers: 3
    },
    {
        question: "Qual tarefa é de responsabilidade do cliente de acordo com o modelo de responsabilidade da AWS ?",
        answers: [
            "Manter a seguranca da Nuvem AWS",
            "Configurar firewalls e redes",
            "Aplicar patch do S.O das instancias RDS",
            "Implementar controles fisicos e ambientais"
        ],
        rightAnswers: 1
    },
    {
        question: " Qual servico da AWS ajuda a fornecer aplicativos altamente disponíveis com failover rápido para arquiteturas multiregionais e multAZ'S ",
        answers: [
            "WAF",
            "Acelerador Global AWS",
            "Escudo AWS",
            "Aws DirectConnect"
        ],
        rightAnswers: 1
    },
    {
        question: "Uma empresa possui um conjunto de aplicativos de comércio eletronico. Os aplicativos precisam ser capazes de enviar mensagens entre si. Qual servico AWS atende a esse requisito?",
        answers: [
            "AWS Auto Scalling",
            "Balanceamento de Carga Elastico",
            "Amazon Simple Queue Service (SQS)",
            "Amazon Kinesis"
        ],
        rightAnswers: 2
    },
    {
        question: "Quais os benefícios do faturamento consolidade para servicos da Nuvem AWS? ESCOLHA DOIS",
        answers: [
            "Descontos por volume",
            "Taxa adicional mínima para uso",
            "Uma fatura para várias contas",
            "Opcoes de parcelamento",
            "Custo personalizado e criacao de orcamento de uso"
        ],
        rightAnswers: [0,2]
    },
    {
        question: "Um usuário deseja revisar todos os buckets do Amazon S3 com ACL'S e politicas de bucket do S3 no console do S3. Qual servico o recurso da AWS atenderá esse servico?",
        answers: [
            "Pontos de acesso Multiregionais S3",
            "Lente de Armaazenamento s3",
            "aws IAM ",
            "Analisador de Acesso S3"
        ],
        rightAnswers:  3
    },
    {
        question: "Qual o melhor recurso para um usuário encontrar informacoes e relatórios relacionados a conformidade sobre a AWS ?",
        answers: [
            "AWS Artefact",
            "Mercado AWS",
            "AWS Inspector",
            "AWS Suport"
        ],
        rightAnswers: 0
    },
    {
        question: "Qual servico da AWS permite que as empresas implantem um aplicativo próximo aos usuários finais ?",
        answers: [
            "Amazon CloudFront",
            "AutoScalling AWS",
            "Aws AppSync",
            "Route 53"
        ],
        rightAnswers: 0
    },
    {
        question: "Qual servico ou recurso AWS melhora o desempenho da rede enviando tráfego através da infra mundial de rede da AWS ?",
        answers: [
            "Tabela de rotas",
            "Aws Transit Gateway",
            "Acelerador Global AWS",
            "Amazon VPC"
        ],
        rightAnswers: 2
    },
    {
        question: "Qual servico da AWS oferece armazenamento de Objetos Altamente Durável ?",
        answers: [
            "Amazon S3",
            "EFS",
            "EBS",
            "FSx"
        ],
        rightAnswers: 0
    },
    {
        question: "Qual responsabilidade pertence a AWS quando uma empresa hospeda seus bancos de dados em isntancias da Amazon EC2 ?",
        answers: [
            "Backups de Banco de Dados ",
            "Patches de software de Banco",
            "Patches do S.O",
            "Instalacoes do S.O"
        ],
        rightAnswers: 3
    }
]

export const s3: Question[] = [
    {
        question: "Quais das opcoes a seguir sao vantagens de migrar para a nuvem AWS ? ESCOLHA DUAS ",
        answers: [
            "A capacidade de transferir a responsabilidade por toda a seguranca para a AWS",
            "A capacidade de usar o modelo pré pago",
            "A capacidade de ter controole total sobre a infra física",
            "Náo é mais necessário adviinhar qual a capacidade será necessária",
            "Nao se preocupe com os controles de acessos dos usuários"
        ],
        rightAnswers: [1,3]
    },
    {
        question: "Qual servico da AWS é um servico de armazenamento de nuvem hibriad que fornece aos usuários locais acesso ao armazenamento em nuvem praticamente ilimitado ? ",
        answers: [
            "AWS DataSync",
            "Geladeira Amazon S3",
            "AWS Storage Gateway",
            "Amazon Elastic Block Store"
        ],
        rightAnswers: 2
    },
    {
        question: "Uma empresa planeja migrar para a AWS e deseja criar estimativas de custos para seus casos de uso da AWS. Qual servico ou ferramenta da AWS a empresa pode usar para entender esses requisitos ? ",
        answers: [
            "Calculator Price aws",
            "Amazon CloudWatch",
            "Explorador de Custos AWS",
            "Orcamento AWS"
        ],
        rightAnswers: 0
    },
    {
        question: "Qual das alternativas a seguir é um princípio de design recomendado do AWS WellArchitectureFramekork",
        answers: [
            "Reduza o tempo de inatividade fazendo alteracoes na infra com opuca frequencia e em grandes incrementos",
            "Invista tempo para configurar a infra manualmente",
            "Aprenda a melhorar com falhas operacionais",
            "Use design de applicativo monolitico para centralizacao"
        ],
        rightAnswers: 2
    },
    {
        question: "Usar o IAM para conceder acesso apenas aos recursos necessários para executar uma tarefa é um conceito conhecido como: ",
        answers: [
            "Acesso Restrito",
            "Acesso conforme Necessário",
            "Acesso com privilegios mínimos",
            "Acesso Simbólico"
        ],
        rightAnswers: 2
    },
    {
        question: "Qual servico ou ferramenta da AWS pode ser usado para configurar um firewall para controlar o trafego que entra e sai de uma subrede Amazon VPC",
        answers: [
            "Grupo de Seguranca",
            "WAF",
            "AWS FirewallManager",
            "Rede ACL"
        ],
        rightAnswers: 3
    },
    {
        question: "Qual ferramenta um desenvolvedor deve usar para integrar recursos de servicos AWS diretamente em um app ?",
        answers: [
            "Kit Desenvolvedor Software aws",
            "CodeDeploy",
            "AWS Lambda",
            "LoteAWS"
        ],
        rightAnswers: 0
    },
    {
        question: "Uma empresa deseja operar um dataWareHouse para analisar dados sem gerenciar a infraestrutura do DataWareHouse. Qual servico da AWS atenderá a esse requisito ?",
        answers: [
            "Aurora",
            "Redshift sem servidor",
            "Aws Lambda",
            "RDS"
        ],
        rightAnswers: 1
    },
    {
        question: "Uma empresa deseja conceder aos usuários de uma conta AWS acesso a recursos de outra conta da AWS. Os usuários atualmente nao tem permissao para acessar os recursos. Qual servico da AWS atenderá a esse requisito ? ",
        answers: [
            "Grupo IAM",
            "Funcao do IAM",
            "Etiqueta do IAM",
            "Analisador Acesso IAM"
        ],
        rightAnswers: 1
    },
    {
        question: "Qual tarefa é de responsabilidade da AWS ao usar os servicos da AWS?",
        answers: [
            "Gerenciamento de permissoes de usuarios no IAM",
            "Criacao de regras de grupo de seguranca para acesso da saída",
            "Manutencao de controles físicos e ambientais",
            "Aplicacao de Patches do sistema Operacional Amazon EC2"
        ],
        rightAnswers: 2
    },
    {
        question: "Uma empresa deseja automatizzar a implamntacao de infra usando estrutura como código IAC. A empresa deseja dimensionar as pilhas de producao para qeu possam ser implantadas em varias regioes da AWS. Qual servico atenderá a esses requisitos?",
        answers: [
            "Amazon CloudWatch",
            "AWSConfig__",
            "Consultor Confiavel AWS",
            "AWS CloudFormation"
        ],
        rightAnswers: 3
    },
    {
        question: "Qual opcao é um recurso de perspectiva da plataforma AWS Cloud Adoption Framework(CAF)",
        answers: [
            "Arquiteutra de Dados",
            "Protecao de Dados",
            "Governanca de Dados",
            "Ciencia de Dados"
        ],
        rightAnswers: 0
    },
    {
        question: "Uma empresa está executando uma carga de trabalho na Nuvem AWS. Qual prática recomendada da AWS garante a Arquitetura MAIS economica para a carga de trabalho?",
        answers: [
            "Acoplamento Solto",
            "Redimensionamento",
            "Cache",
            "Redundancia"
        ],
        rightAnswers: 1
    },
    {
        question: "Uma empresa está usando um servico de terceiros para fazer o backup de 10tb e dados em uma biblioteca de fitas. O servidor de backup local está ficando sem espaco. A empresa deseja usar os servicos da AWS para backups sem alterar seus fluxos de trabalho de backup existentes. Qual servico da AWS a empresa deve usar para atender esses requisitos: ",
        answers: [
            "Amazon elastic Block Store",
            "AWS Storage Gateway",
            "Amazon Elastic Container Service",
            "Amazon Lambda"
        ],
        rightAnswers: 1
    },
    {
        question: "Qual ferramenta da aws oferece aos usuários a capacidade de planejar o uso do servico, os custos do servico, as reservas de instancia alem de permitir qeu definam alertar personalizados quando seus custos ou uso exceram o s limites estabelecidos?",
        answers: [
            "Explorador de Custos",
            "Aws Budged",
            "Relatorio Custos e uso AWS",
            "Relatorio Instancias Reservadass"
        ],
        rightAnswers: 1
    },
    {
        question: "Quais tarefas sao de responsabilidade do cliente, de acordo com o modelo de responsabilidade compartilhada da AWS? ESCOLHA DOIS",
        answers: [
            "Estabelecer a infra-global ",
            "Execute a cripgografia do lado do cliente",
            "Configurar Credenciais de IAM",
            "Locais de borda seguros",
            "Corrigir instancias do banco de dados da Amazon RDS"
        ],
        rightAnswers: [1,2]
    },
    {
        question: "Um desenvolvedor foi contratado por uma grande empresa e precisa de credenciais da AWS. Quais sao as melhores práticas de segurancas que devem ser seguidas? ESCOLHA DUAS",
        answers: [
            "Cocneda ao desenvolvedor acesso apenas aos Recursos da AWS necessários para executar o trabalho",
            "Compartilhe as creenciais do usuário raiz da conta AWS como desenvolvedor",
            "Adicione o desenvolvedor ao grupo de ADM no AWS IAM",
            "Configure uma politica de senha que garanta que a senhad o desenvolvedor nao possa ser alterada",
            "Certifique-se de que a politica de senha da conta exija um comprimento mínimo"
        ],
        rightAnswers: [0,4]
    },
    {
        question: "Uma empresa tem várias contas da AWS que incluem cargas de trabalho de computacao que nao pode ser interrompiudas. A empresa deseja obter descontos de faturamento com base no uso dos servicos AWS. Qual recurso ou opcao de compra da AWS atenderá a esses requisitos ?",
        answers: [
            "Marcao de recursos",
            "Faturamento Consolidado",
            "Precos pré pagos",
            "Instancias SPOT"
        ],
        rightAnswers: 2
    },
    {
        question: "Um usuário deseja permitir que aplicativos em execucao em uma instancia EC2 facam chamadas para outros servicos da AWS. O acesso concedido deve ser seguro. Qual servico ou recurso AWS deve ser utilizado ?",
        answers: [
            "Grupo de Seguranca",
            "Gerenciador de Firewall da AWS",
            "Funcoes do IAM",
            "Chaves SSH do usuário IAM"
        ],
        rightAnswers: 2
    },
    {
        question: "Uma empresa deseja um servidor de arquivos Windows totalmente gerenciado para seus aplicativos baseados em Windows. Qual servico da AWS atenderá esse requisito ?",
        answers: [
            "Amazon FSX",
            "Amazon Elastic kubernets",
            "Amazon Elastic Container Service",
            "Amazon EMR"
        ],
        rightAnswers: 0
    },
    {
        question: "Uma empresa deseja migrar sua carga de trabalho local do NFS para a AWS. Qual tipo de aws storage gateway a empresa deve usar para atender a esse requisito ? ",
        answers: [
            "Gateway de fila",
            "Gateway de volume",
            "Gateway de arquivos Amazon FSX",
            "Gateway de arquivos Amazon S3"
        ],
        rightAnswers: 2
    },
    {
        question: "Uma empresa precisa rastrear a atividade em suas contas AWS e saber quando uma chamada de API é feita em seus recursos AWS. Qual ferramenta ou servico da AWS pode ser usado para atender a esses requisitos ?",
        answers: [
            "CloudWatch",
            "InspetorAmazon",
            "CloudTrail",
            "IAM"
        ],
        rightAnswers: 2
    },
    {
        question: "Uma empresa possui um aplicativo initerrupto executado em instancias da amazon EC2. O aplicativo processa constantemente um backlog em uma fila da amazon SImple Queue Service. Espera-se que esse uso continue a crescer por anos. Qual é o modelo de compra da instancia EC2 mais economica para eatender esses requisitos ?",
        answers: [
            "SPOT",
            "Instancia sob Demanda",
            "Plano de Poupanca",
            "Hosts Dedicados"
        ],
        rightAnswers: 2
    },
    {
        question: "Uma empresa deseja que um servico AWS forneca recomendacoes de produtos com base nos dados de seus clientes. Qual servico da AWS atenderá esse requisito ?",
        answers: [
            "Amazon Polly",
            "Amazon Personalize",
            "Amazon Compreender",
            "Reconhecimento da Amazon"
        ],
        rightAnswers: 1
    },
    {
        question: "Uma empresa está planejando sua migracao para a nuvem AWS. A empresa está identificando suas lacunas de capacidade usando as perspectivas do AWS CloudAdoptionFramework. Qual fase da jornada de transformacao da nuve inclui essas atividadess de identificacao?",
        answers: [
            "Visualize",
            "Alinhar",
            "Escala",
            "Lancamento"
        ],
        rightAnswers: 1
    },
    {
        question: "Uma empresa de socialmedia deseja proteger seu aplicativo Web contra exploracoes comuns da web como SQLInjection e scripts entre sites. Qual servico da AWS atenderá esses requisitos?",
        answers: [
            "Inspetor da Amazon",
            "AWS Waf",
            "Amazon GuardDuty",
            "Amazon CloudWatch"
        ],
        rightAnswers: 1
    },
    {
        question: "Qual servico da aws totalmente gerenciado auxila na criacao, teste e gerenciamento de imanges personalizadas do amazon ec2?",
        answers: [
            "Construtor de imagens EC2",
            "AMI",
            "Assistente Inicializacao AWS",
            "Elastic Beanstalk"
        ],
        rightAnswers:0
    },
    {
        question: "Uma empresa deseja um processo automatizado para verificar continuamente sua instancias amazon EC2 em busca de vulnerabilidades de software. Qual servico AWS atenderá esses requisitos ?",
        answers: [
            "Amazon GuardDuty",
            "Inspetor da Amazon",
            "Detetive da Amazon",
            "Amazon Cognito"
        ],
        rightAnswers: 1
    },
    {
        question: "Uma empresa precisa realizar o procesasmento de dados uma vez por semana, o que normalmente leva cerca de 5 horas para ser concluído. Qual servico AWS a sua empresa deve usar para esta carga de trabalho?",
        answers: [
            "AWS Lambda",
            "Amazon EC2",
            "AWS CodeDeploy",
            "Comprimento de Onda AWS"
        ],
        rightAnswers: 1
    },
    {
        question: "Qual servico ou recurso da AWS fornece informacoes de log do tráfego de entrada e saída em interfaces de uma rede VPC?",
        answers: [
            "Logs do AmazonCLoudWatch",
            "Aws CloudTrail",
            "Registro de fluxo de VPC",
            "IAM"
        ],
        rightAnswers: 2
    },
    {
        question: "Uma empresa deseja projetar um sistema de armazenamento centralizado para gerenciar os dados de configuracao e as senhas de seus aplicativos comerciais críticos. Qual servico ou recurso da AWS atenderá esses requisitos de maneira MAIS economica?",
        answers: [
            "Armazenamento de parametros do AWS System Manager",
            "Gerenciador de segredos AWS",
            "AWSConfig__",
            "Amazon S3"
        ],
        rightAnswers: 0
    },
    {
        question: "Uma empresa deseja planejar impalntar containers na AWS. A empresa deseja controle total dos recursos computacionais que hospedam os containers. Qual servico AWS atenderá esses requisitos: ",
        answers: [
            "Amazon Elastic Kubernets",
            "AWS Fargate",
            "Amazon EC2",
            "Eamazon Elastic Container Service (ECS)"
        ],
        rightAnswers: 2
    },
    {
        question: "Qual servico ou recurso da AWS permite qeu usuários criem novas contas da AWS, agrupem várias contas para organizar fluxos de trabalhos e aplique política de grupos entre as contas",
        answers: [
            "AWS IAM",
            "Colsultor Confiável AWS",
            "AWS CloudFormation",
            "Organizacoes AWS"
        ],
        rightAnswers: 3
    },
    {
        question: "Uma empresa deseja armazenar e recuperar arquivos no AmazonS3 para seus aplicativos locais existentes usando protocolos de sistemas de arquivos padrao do setor. Qual servico da AWS atenderá a esses requisitos?",
        answers: [
            " AWS DataSync",
            " AWS SnowBallEdge",
            " Gateway de arquivos AmazonS3",
            "Familia de Transferencias AWS"
        ],
        rightAnswers: 2
    },
    {
        question:"Uma empresa quer bloquear ataques de SQL INJECT. Qual servico ou recurso ajudará nesse erquisito ?",
        answers: [
            "AWS WAF",
            "ACL's de rede",
            "Grupos de Seguranca",
            "AWS Certificate Manager"
        ],
        rightAnswers: 0
    },
    {
        question: "Uma empresa deseja uma ferramenta unificada para fornecer um método consistente de interacao com os servicos AWS. Qual servico ou recurso AWS atenderá?",
        answers: [
            "AWS Cli",
            "Amazon Elastic Container Service ECS",
            "AWS9",
            "Rede privada virtual da AWS (AWS VPN)"
        ],
        rightAnswers: 0
    },
    {
        question: "Uma empresa precisa avaliar seu ambiente AWSe fornecer recomendacoes de melhores práticas em cinco categorias: custo, desempenho, llimites de servico, tolerancia  afalhas e seguranca. Qual servico AWS a empresa pode usar para atender a esse requisitos?",
        answers: [
            "Escudo AWS",
            "AWS WAF",
            "Consultor Confia'vel AWS",
            "Catálogo de Servicos AWS"
        ],
        rightAnswers: 2
    },
    {
        question: "Qual perspectiva do AWS Cloud Adoption Framework inclui recursos para gerencia e configuracao de Patches ?",
        answers: [
            "Plataforma",
            "Operacoes",
            "Seguranca",
            "Governanca"
        ],
        rightAnswers: 1
    },
    {
        question: "Uma empresa tem uma carga de trabalho de computacao estavel, previsivel e initerrupta. Qual opcoes de compra de instancias atendem esses requisitos de maneira MAIS ECONOMICA?",
        answers: [
            "On Demand",
            "Instancias Reservadas",
            "SOPT",
            "Planos de Poupanca",
            "Hosts Dedicados"
        ],
        rightAnswers: [1,3]
    },
    {
        question: "Qual modelo de precos do amazon EC2 é o mais economico para uma carga de trabalho initerupta executada uma vez por ano durante 24 horas?",
        answers: [
            "Instancia sob Demanda",
            "Reservada",
            "Spot",
            "Dedicada"
        ],
        rightAnswers: 0
    },
    {
        question: " Qual opcao é uma responsabilidade compartilhada entre a AWS e seus clientes no modelo de responsabilidade compartilahda da AWS?",
        answers: [
            "Configuracao de sistemas operacionais de instancias do EC2",
            "Criptografia do lado do servidor do lado do sistema ",
            "Gerenciamento de Patches",
            "Seguranca da infra Física"
        ],
        rightAnswers: 2
    }
  
]

export const s4: Question[] = [
    {
        question: "Uma empresa deseja migrar suas cargas de trabalho locais para a nuvem AWS. A empresa deseja separar as cargas de trabalho para estorno em diferentes departamentos. Quais servicos ou recursos da AWS atenderao esse requisitos ? ESCOLHA DOIS",
        answers: [
            "Grupos de canais",
            "Faturamento Consolidao",
            "Locais de Presenca",
            "AWSConfig__",
            "Varias Contas AWS"
        ],
        rightAnswers: [1, 4]
    },
    {
        question: "Qual tarefa é de responsábilidade da AWS, de acordo com o modelo de responsabilidade compartilhada da AWS?",
        answers: [
            "Habilite a criptografia do lado do cliente",
            "Configurar politicas de seguranca iAM",
            "Aplique Patch no sistem aoperacional Convidado em uma instancia EC2",
            "Aplicar atualizacoes ao hipervisorNitor"
        ],
        rightAnswers: 3 
    },
    {
        question: "Qual opcao é uma vantagem de usar AWS p/ Computacao em nuvem ?",
        answers: [
            "Troque despesas variáveis por despesas fixas",
            "Precos pré pagos",
            "Diminuicao da velocidade e agilidade",
            "Gsatar dinheiro administrando DataCenters"
        ],
        rightAnswers: 1
    },
    {
        question: "Qual opcao é um recurso de perspectiva de negócios do AWS CloudAdoptionFrame",
        answers: [
            "Evoluycao da cultura",
            "Gestao de eventos",
            "Monetizacao de dados",
            "Arquitetura da Plata"
        ],
        rightAnswers: 2
    },
    {
        question: "Uma empresa está valiando seu plano do AWS Business Support p/ eterminar se o plano ainda atende as necessidades da empresa. A empresa está considerando mudar para o Enterprise Support. Qual o benefício adicional a empresa receberá com essa escolha?",
        answers: [
            "Conjunto completo de verificacoes do TrustedAdvisor",
            "Acesso por telefone email chat p/ engenheiro de suporte na nuvem 24/7",
            "Um gerente tecnico de contas TAM",
            "Uma revisao consultiva e orientacao de arquitetura"
        ],
        rightAnswers: 2
    },
    {
        question: "Qual modelo de precificacao interrompera uma instancia do amazon EC2 em execucao se a capacidade ficar temporáriamente indisponivel ?",
        answers: [
            "OnDemand",
            "Instancia reservada",
            "Instancia SPOT",
            "Instancia reservada Conversivel"
        ],
        rightAnswers: 2
    },
    {
        question: "Quais opcoes sao recursos de perspectiva de seguranca do AWS Cloud Adoption Framwork, ESCOLHA DOIS",
        answers: [
            "Observabilidade",
            "Gerenciamento de incidentes e problemas",
            "Resposta a incidentes",
            "Protecao da Infra",
            "Disopnibilidade e continuidadea"
        ],
        rightAnswers: [2,3]
    },
    {
        question: "Uma empresa deseja executar sua carga de trabalho em instancias EC2 por mais deum ano. Essa carga será executada continuamente. Qual opcao oferece uma melhor tarifa em relacao a sob demanda?",
        answers: [
            "Processador AWS Graviton",
            "Hosts Dedicados",
            "Planos de economia de instancia EC2",
            "Instancia Amazon EC2 AutoScalling"
        ],
        rightAnswers: 2
    },
    {
        question: "Qual característica da nuvem AWS ajuda os usuários a elminar a capacidade subutilizada da CPU ?",
        answers: [
            "Agilidade",
            "Elasticiadde",
            "Confiabilidade",
            "Durabilidade"
        ],
        rightAnswers:1 
    },
    {
        question: "Quais servicos da AWS uma empresa pode usar para obter uma arquitetura pouco acoplada? ESCOLHA DUAS",
        answers: [
            "WorkSpaces",
            "SQS",
            "Amazon Connect",
            "Consultor Confiavel",
            "Funcoes de Etapas AWS"
        ],
        rightAnswers: [1,4]
    },
    {
        question: "Quais servicos da nuvem AWS pode enviar alertas aos clientes se os limites de gastos personalizados forem excedidos",
        answers: [
            "Orcamento AWS",
            "Explorador de custos AWS",
            "Tags de alocacao de custos AWS",
            "Organizacoes AWS"
        ],
        rightAnswers: 0
    },
    {
        question: "Uma empresa planeja migrar para a NuvemAWS. A empresa deseja usar o aws Cloud Adoption Framework (CAF) para definir e rastrear resultados de negócios como parte de sua jornada de transformação da nuvem. Qual capacidade de perspectiva de governanca do AWS CAF atenderá a esses requisitos ?",
        answers: [
            "Gestao de benefícios",
            "Gestao de riscos",
            "Gerenciamento de portfólio de aplicativos",
            "Gestao financeira em nuvem"
        ],
        rightAnswers: 0
    },
    {
        question: "Uma empresa precisa mover de forma rápida e segura por longas distancias entre seu cliente um bucket do amazon s3. Qual recurso atenderá a esse requisito ?",
        answers: [
            " Versao S3",
            " Aceleracao de Transferencias S3",
            "S3 ACLs",
            "Camdadas Inteligentes S3"
        ],
        rightAnswers: 1
    },
    {
        question: "Uma empresa precisa executar continuamente uma carga de trabalho experimental em uma instancia do EC2 e interrompela após 12 horas. Qual opcao de compra de instancia atenderá a esse requisito de maneira mais economica ?",
        answers: [
            " Sob Demanda",
            "Reservadas",
            "Spots",
            "Dedicadas"
        ],
        rightAnswers: 0
    },
    {
        question: "Qual fase da jornada de transformacao da nuvem AWSCloudAdoptionFramework, se concentra em demonstrar como a nuvem ajuda a acelerar os resultados dos negócios ?",
        answers: [
            "Uma escala",
            "Visualizar",
            "Alinhar",
            "Lancamento"
        ],
        rightAnswers: 1 
    },
    {
        question: "Qual opcao é de responsabilidade do cliente no modelo de responsabilidade compartilhada AWS? ",
        answers: [
            "Manutencao do hardware subjacente das instancias do Amazon EC2",
            "Seguranca de dados aplicativos",
            "Seguranca fisica dos data centers",
            "Manutencao de componentes VPC"
        ],
        rightAnswers: 1
    },
    {
        question: "Uma empresa deseja que suas instancias do Amazon EC2 operem em um ambiente altamente disponivel, mesmo que haja um desastre natural em uma área geográfia específica. Qual abordagem alcançará esse Objetivo?",
        answers: [
            " Use instancias EC2 em várias regioes AWS",
            " Use instancias EC2 em vários locais do Amazon CloudFront",
            "Use instancias EC2 em vários pontos de presença",
            "Use instancias EC2 em zonas locais da AWS"
        ],
        rightAnswers: 0
    },
    {
        question: "Uma empresa quer modernizar e converter uma aplicacao Monolítica em microsservicos. A empresa quer migrar o aplicativo para a AWS. Qual estratégia de migração a empresa deve usar ?" ,
        answers: [
            "Hospedar Novamente",
            "Replataforma",
            "Recompra",
            "Refatorar"
        ],
        rightAnswers: 3
    },
    {
        question: "Um administrador de sistemas criou um novo usuário IAM para um desenvolvedor e atribuiu o usuario uma chave de acesso em vez de um nome de usuário e uma senha. Para que serve essa chave de acesso?",
        answers: [
            "Acessar a conta aws como usuário raiz da conta AWS",
            "Para acessar a conta AWS por meio do AWS Management Console",
            "Para acessar ac onta AWS por meio de uma CLI",
            "Para cessar todas as contas AWS de uma empresa"
        ],
        rightAnswers: 2
    },
    {
        question: "Qual a opcao é um ambiente que consiste em um ou mais datacenters?",
        answers: [
            "Amazon CloudFront",
            "Zona de Disponibilidade,",
            "VPC",
            "Postos Avancados da AWS"
        ],
        rightAnswers: 1
    },
    {
        question: "Uma empresa está migrando um data center local para a nuvem da AWS. A empresa deve migrar 50 PB de dados em armazenamentos de arquivos para a AWS com a menor sobrecarga operacional possível. Qual servico irá suprir?",
        answers: [
            "SnowMobile",
            "SnowBall Edge",
            "Troca de Dados AWS",
            "Migracao de dados AWS"
        ],
        rightAnswers: 0
    },
    {
        question: "Uma empres apossui um aplicativo com requisitos robustos de hardware. O aplicativo deve ser acessado por alunos que utilizam laptops leves e de baixo custo. Qual servico da AWS ajudará a empresa a implantar o aplicativo sem investir em uama infraestrutura back-end opu hardware de cliente de última geracao ?",
        answers: [
            "AppStream 2.0",
            "AWS AppSync",
            "AmazonWorkLink",
            "AWS Elastic Beanstalk"
        ],
        rightAnswers: 3
    },
    {
        question: "Uma empresa deseja colsultar os logs de seu servidor para obter insights sobre as experiencias de seus clientes. Qual servico AWS armazenará esses dados de maneira mais economica?",
        answers: [
            "Aurora",
            "EFS",
            "Ebs",
            "S3"
        ],
        rightAnswers: 3
    },
    {
        question: "Qual das alternativas a seguir é um princípio de design recomendado para a arquitetura da nuvem AWS?",
        answers: [
            "Projete componentes fortemente acoplados",
            "Construir um único componente de aplicativo que possa lidar com todas as funcionalidades do aplicativo",
            "Faca grandes alteracoes em menos iteracoes para reduzir as chances de falhas",
            "Evite arquitetura monolitica segmentando cargas de trabalho"
        ],
        rightAnswers: 3
    },
    {
        question: "Qual servico da aws ajuda os usuários a auditar a atividade da API em suas contas da AWS ?",
        answers: [
            "AWS CloudTrail",
            "Inspetor da Amazon",
            "AWS WAF",
            "AWS Config"
        ],
        rightAnswers: 0
    },
    {
        question: "Qual tarefa é de responsabilidade do cliente, de acordo com o modelo de responsabilidade compartilhada da AWS?",
        answers: [
            "Gerenciamento dos sistemas operacionais Convidados",
            "Manutencao da config dos dispositivos de infra",
            "Gerenciamento dos sistemas operacionais host e virtualizacoa",
            "Manutencao do software que alimenta as zonas de disponbiilidade"
        ],
        rightAnswers: 0
    },
    {
        question: "Uma empresa deseja adicionar e remover automaticametne instancias do Amazon EC2. A empresa deseja que as instancias EC2 se ajustem dinamicamente a diversas cargas de trabalho. Qual servico ou recurso atenderá esses requisitos ?",
        answers: [
            "Amazon DynamoDB",
            "Instancias SPOT",
            "Familia AWS Snow",
            "Escalonamento automático EC2"
        ],
        rightAnswers: 3
    },
    {
        question: "Um usuário deseja automatizar com seguranca o gerenciamento e a rotacao de credenciais compartilhadas entre aplicativos, gastando o mínimo de tempo no gerenciamento de tarefas. Quais servicos ou recursos da AWS pode ser usado para fazer isso?",
        answers: [
            "AWS CoudHSM",
            "Servico de gerenciamento de chaves AWS (aws kms)",
            "Gerenciador de segredos da AWS",
            "Criptografia do lado do Servidor"
        ],
        rightAnswers: 2
    },
    {
        question: "Qual servico de seguranca reconhece e classifica automaticamente dados confidencias ou propriedades intelectual na AWS?",
        answers: [
            "Amazon GuardDuty",
            "Amazon Macie", 
            "Inspetor da Amazon",
            "Escudo AWS"
        ],
        rightAnswers: 1
    },
    {
        question: "Quais acoes sao praticas recomendadas para um usuário ROOT dec onta AWS? ESCOLHA DOIS",
        answers:[
            "Compartilhe credencias de usuário ROOT c membros da equipe",
            "Crie vários usuários root para a conta, separados por ambiente",
            "Habilite autenticacao MFA",
            "Crie um usuário IAM c privilegio de ADM diárias ao invés de usar o root",
            "Use acesso programático em vez do usuário root e senha"
        ],
        rightAnswers: [2, 3]
    },
    {
        question: "Uma empresa está executando uma carga de trabalho crítica em uma instância de banco de dados do Amazon RDS. A empresa precisa que a instancia de banco de dados esteja altamente disponivel com um tempo de recuperacao inferior a 5 minutos. Qual solucao atenderá a esses erquisitos?",
        answers: [
            "Crie uma réplica de leitura da instancia de banco de dados.",
            "Crie um modelo de instancia de bacno de dados usando AWS CloudFormation",
            "Tire snapSHots frequentes da instancia de banco de dados. Armazene os snaps no Amazon S3",
            "Modifique a instancia de bacno de dados para ser implantacao MULT AZ"
        ],
        rightAnswers: 3
    },
    {
        question: "Uma empresa planeja migrar seu aplicativo para AWS e executa-lo em instancias Amazon EC2. O aplicativo terá uso contínuo por 1 ano. Qual opcao de compra de instancia EC2 atenderá esses requisitos de maneira MAIS economica?",
        answers: [
            "Instancia Reservadas",
            "Instancias SPOT",
            "Sob Demanda",
            "Host Dedicados"
        ],
        rightAnswers: 0
    },
    {
        question: "Uma empresa precisa transferir dados entre um bucket do S3 e um aplicativo Local. Quem é o responsavel pela seguranca desses dados, de acordo com o modelo de responsabiliadde compartilhada?",
        answers: [
            "A empresa",
            "AWS",
            "Firewall Fornecedor",
            "Parceiro do AWS Market"
        ],
        rightAnswers: 0
    },
    {
        question: "Qual pilar do AWS WellArchitected Framework se refere a capacidade de um sistema se recuperar de interrupcoes de infraestrutura ou esrvico e adquirir recursos de computacao dinamicamente para atender a demanda?",
        answers: [
            "Seguranca",
            "Confiabilidade",
            "Eficiencia de desempenho",
            "Otimizacao Custos",
        ],
        rightAnswers: 1
    },
    {
        question: "Uma empresa deseja identificar buckets do S3 que sao compartilhados com outra conta da AWS. Qual servico ou recurso atenderá esses requisitos ?",
        answers: [
            "Formacao do Lago AWS",
            "Relatorio de credencias do IAM",
            "Amazon CloudWatch",
            "Analisador de Acesso IAM"
        ],
        rightAnswers: 3
    },
    {
        question: "Qual servico da AWS aoferece aos usuários a capacidade de criar paines interativos de BI que incluem insights de machine Learning ?",
        answers: [
            "Atenas",
            "Kendra",
            "QuickSight",
            "Redshift"
        ],
        rightAnswers: 2
    },
    {
        question: "Qual das alternativas a seguir é uma proposta de valor da AWS que descreve a capacidade de um usuário de dimensionar a infra com base na demanda ?",
        answers: [
            "Velocidade de inovacao",
            "Elasticidade de recursos",
            "Arquitetura dissociada",
            "Implantacao Global"
        ],
        rightAnswers: 1
    },
    {
        question: "Qual acao é uma prática recomendada de seguranca para acesso a dados confidenciais armazenados em um bucket do Amazon S3?",
        answers: [
            "Habilite replicacao entre Regioes do S3 no bucket s3",
            "Use funcoes do IAM para aplicativos que exigem acesso ao bucket S3",
            "Configure o AWS WAF para evitar acesso nao autorizado",
            "Configure o GuardDuty, para evitar acesso nao autorizado."
        ],
        rightAnswers: 1
    },
    {
        question: "Uma empresa deseja saber mais sobre os benefícios oferecidos pela computacao em nuvem. A empresa quer entender a vantagem operacional da agilidade. Como a AWS oferece agilidade aos usuários ? ",
        answers: [
            "A capacidade de garantir alta disponibilidade implantando cargas de trabalho em diversas regioes",
            "Um modelo pré-pago para muitos servicos e recursos",
            "A Capaciadde de transferir o gerenciamento de infra para a nuvem AWS",
            "A Capacidade de provisionar e desprovisionar recursos rapidamente ocm esforco minimo"
        ],
        rightAnswers: 3
    },
    {
        question: "Uma empresa precisa de um portal e usuário central para que os usuários possam fazer login em aplicativos comerciais de terceiros que oferecam suporte a SecurityAssertionMarkupLanguage. quals ervico AWS atenderá ?",
        answers: [
            "IAM",
            "Cognito",
            "IAM Identity Center",
            "CLI"
        ],
        rightAnswers: 2
    }, 
]

export const s5:Question[] = [
    {
        question: "Qual servico da AWS os usuários devem usar para aprender sobre disponibilidade e as oepracoes dos servicos AWS?",
        answers: [
            "Amazon EventBridge",
            "Catalago Servicos AWS",
            "AWS Control Tower",
            "Painel de integridade AWS"
        ],
        rightAnswers: 3
    },
    {
        question: "Qual serviço ou ferramenta da AWS pode ser usado para capturar informacoes sobre o tráfego de entrada e saída em uma Amazon VPC?",
        answers: [
            "Registro de Fluxo VPC",
            "Inspetor da Amazon",
            "Servicos EndPoint VPC",
            "Gateway NAT"
        ],
        rightAnswers: 0
    },
    {
        question: "O que o cliente SEMPRE é responsável por gerenciar, de acordo com o modelo de responsabilidade compartilhada da AWS?",
        answers: [
            "Licencas de Software",
            "Rede",
            "Dados do Cliente",
            "Chaves  de criptografia"
        ],
        rightAnswers: 2
    },
    {
        question: "Qual servico da AWS pode ser usado para recuperar relatórios de conformidade sob demanda ?",
        answers: [
            "Gerenciador Segredos AWS",
            "Artefato AWS",
            "Hub de seguranca da AWS",
            "Gerenciador de certificados AWS"
        ],
        rightAnswers: 1
    },
    {
        question: "Qual servico da AWS permite que os usuários verifiquem vulnerabilidades em instancias do amazon EC2 usando modelos de avaliacao pré definidos ?",
        answers: [
            "WAF",
            "Consultor Confiável AWS",
            "Inspetor AMAZON",
            "AWS Shield"
        ],
        rightAnswers: 2
    },
    {
        question: "Uma empresa planeja migrar para a Nuvem AWS. A empresa está coletando informações sobre sua infraestrutura local e exige informacoes como nome do host, endereco IP e endereco MAC. Qual servico AWS atenderá a esses requisitos ?",
        answers: [
            "DataSync",
            "Migracao de aplicativos AWS",
            "Descoberta Aplicativos AWS",
            "AWS DMS"
        ],
        rightAnswers: 2
    },
    {
        question: "Qual acao ajudará a aumentar a seguranca na nuvem AWS?",
        answers: [
            "Habilite o acesso programático para todos os usuários do IAM",
            "Use usuários do IAM em vez de funcoes do IAM p/ delegar permissoes",
            "Alterne as chaves de acesso periodicamente",
            "Use politicas inline em vez de politicas gerenciadas pelo client"
        ],
        rightAnswers: 2
    },
    {
        question: "Uma empresa está planejando migrar seu aplicativo para Nuvem AWS.Qual ferramenta ou conjunto de recursos da AWS a empresa deve usar para analisar e avaliar sua preparação para a migração ? ",
        answers: [
            "Estrutura de adocao de nuvem CAF",
            "Calculadora de precos da AWS",
            "Estrutura bem arquitetada da AWS",
            "Orcamentos da AWS"
        ],
        rightAnswers: 0
    },
    {
        question: "Qual das alternativas a seguir descreve algumas das principais funcionalidades do Amazon S3?",
        answers: [
            "O Amazon S3 é um servico de armazenamento em blocos de alto desempenho projetado para uso com o Amazon EC2.",
            "Amazon s3 é um servico de armazenamento de objetos que oferece desempenho seguranca escalabilidae e disopnibilidade de dados de alto nível",
            "O Amazon S3 é um sistema de armazenamento de arquivos totalmente gerenciado, altamente confiável e escalável, acessível por meio do protocolo SMB padrao do setor",
            "Amazon S3 é um NFS elástico escalável e totalmente gerenciado par auso com servicos da Nuvem AWS e recursos locais"
        ],
        rightAnswers: 1
    },
    {
        question: "Qual benefício da AWS é demonstrado pelos servicos de tecnologia sob demanda que permitem as empresas substituir despesas fixas inicias por despesas variáveis ?",
        answers: [
            "Alta disponibilidae",
            "Economias de escala",
            "Precos pré-pagos",
            "Alcance Global"
        ],
        rightAnswers: 2
    },
    {
        question: "Quais servicos ou recursos da AWS permitem que os usuários conectem redes locais a uma VPC? ESCOLHA DOIS",
        answers: [
            "AWS VPN",
            "Balenceamento de carga Elástica",
            "AWS Direct Connect",
            "Pareamento de VPC",
            "Amazon CloudFront"
        ],
        rightAnswers: [0 , 2]
    },
    {
        question: "Um usuário precisa implantar rapidamente um banco de dados não relacional na AWS. O usuário não deseja gerenciar o hardware subjacente ou o software de banco de dados. Qual serviço AWS pode ser usado para fazer isso?",
        answers: [
            "Amazon RDS",
            "Amazon Dynamo DB",
            "Amazon Aurora",
            "Amazon Redshift"
        ],
        rightAnswers: 1
    },
    {
        question: "Quais ações são exemplos do esforco de uma empresa para redimensionar seus recursos da AWS para controlar os custos da nuvem? ESCOLHA DOIS",
        answers: [
            "Mude do Amazon RDS p/ Amazon DYnamnoDB p/ acomoadr conjuntos de dados NOSQL",
            "Basear a selecao de tipos de instancia do Amazon EC2 em padroes de utilizacao anteriores",
            "Use as politicas de ciclo de vida do Amazon S3 para mover objetos que os usuários acessam com pouca frequencia para níveis de armazenamento de custo mais baixo",
            "Use implantacaoes Multi-AZ p/ Amazon RDS",
            "Substitua as instancias existentes do Amazon EC2 pelo AWS Elastic Beanstalk"
        ],
        rightAnswers: [0,2]
    },
    {
        question: "Qual servico ou recurso da AWS uma empresa pode usar para aplicar regras de segurancas a instancias específicas do amazon EC2",
        answers: [
            "ACL'S de rede",
            "SecurityGroup",
            "Consultor AWS",
            "WAF"
        ],
        rightAnswers: 1
    },
    {
        question: "Quais principios de design apoiam o pilar de Confiabilidade do AWSWellArchFramea, ESCOLHA DOIS",
        answers: [
            "Execute operacoes com código",
            "Habilite a rastreabilidade",
            "Dimensionar automaticamente para atender a damanda",
            "Distribuir recursos globalmente p/ melhorar o tempo de resposta",
            "Recuperar-se automaticamente de falhas"
        ],
        rightAnswers: [2,4]
    },
    {
        question: "Uma empresa que usa AWS precisa transferir 2TB de dados. Qual tipo de transferencia desses dados não resultaria em nenhum custo para a empresa ?",
        answers: [
            "Transferencia de dados de entrada da Internet",
            "Transferencia de dados de saída para a internet",
            "Transferencia e dados entre regioes da AWS",
            "Transferencia de dados entre AZ's"
        ],
        rightAnswers: 0
    },
    {
        question: "Uma empresa deseja criar modelos que possam ser reutilizados para implantar vários recursos da AWS. Qual servico ou recurso da AWS a empresa pode usar para atender a esse requisito ?",
        answers: [
            "AWS Marketplace",
            "AMI",
            "AWS CloudFormation",
            "AWS OpsWorks"
        ],
        rightAnswers: 2
    },
    {
        question: "Uma empresa está construindo um aplicativo que requer capacidade de enviar, armazenar e receber mensagens entre componentes do aplicativo. A empresa tem outro requisito para processar mensagens na ordem FIFO. Qual servico usar?",
        answers: [
            "Funcoes de etapas AWS",
            "SNS",
            "Kinesis",
            "SQS"
        ],
        rightAnswers: 3
    },
    {
        question: "Qual servico ou recurso da AWS é um servico pré autenticado baseado em navegador que pode ser iniciado diretamente no Console de gerenciamento da AWS?",
        answers: [
            "API da AWS",
            "AWS Lightsail",
            "Nuvem AWS9",
            "AWS CloudShell"
        ],
        rightAnswers: 3
    },
    {
        question: "Uma empresa deseja migrar seu banco de dados par aum servico gerenciado da AWS compatível com Postgere. Qual servico da AWS atenderao esses requisitos ? ESCOLHA DOIS",
        answers: [
            "Atenas",
            "RDS",
            "ec2",
            "dyNAMODB",
            "Aurora"
        ],
        rightAnswers: [1,4]
    },
    {
        question: "Uma empresa possui uma frota de navios cargueiros. Os navios cargueiros possuem sensores que coletam dados no mar, onde há conectividade interminente ou inexistente com a internet. A empresa precisa coletar, formatar e processar os dados no mar e move-los posteriormente p/ AWS. Qual servico AWS a empresa deve usar p/ esses requisiitos ?",
        answers: [
            "IOT Core",
            "LightSail",
            "Storage Gateway",
            "SnowBallEdge"
        ],
        rightAnswers: 3
    },
    {
        question: "Uma empresa hospeda um aplicativo em várias instancias do Amazon EC2. O aplicativo usa amazon Simple Notification service p/ mensagens. Qual servico ou recurso aws dará ao aplicativo permissao para acessar servicos AWS necessários ?",
        answers: [
            "AWS Certificate Manager",
            "Funcoes IAM",
            "Hub Seguranca AWS",
            "Amazon GuardDuty"
        ],
        rightAnswers: 1
    },
    {
        question: "Um usuário tem conhecimento limitado dos servicos da aws, mas deseja implantar rapidamente um aplicativo NodeJS escalonável na nuvem AWS. Qual servico deve ser usado p/ implantar o aplicativo ?",
        answers: [
            "CloudFormation",
            "Elastic Beanstalk",
            "Amazon EC2",
            "Amazon OpsWorks"
        ],
        rightAnswers: 1
    },
    {
        question: "Uma empresa precisa de uma rede de entrega de conteúdo que forneça entrega segura de dados, vídeos, aplicativos e API'S para usuários em todo o mundo, com baixa latencia e altas velocidades de transferencia.Qual servico ?",
        answers: [
            "CloudFront ",
            "Balanceamento de carga elástico",
            "S3",
            "ElasticTranscoder"
        ],
        rightAnswers: 0
    },
    {
        question: "Uma empresa precisa usar software de terceiros para sua carga de trabalho na AWS. Qual servico aempresa pode usar para adquirir o software? ",
        answers: [
            "Gerenciador de acesso a recursos AWS",
            "Servico gerenciados pela AWS",
            "Gerenciador de licencas AWS",
            "AWS Marketpalce"
        ],
        rightAnswers: 0
    },
    {
        question: "Uma empresa precisa de armazenamento de arquivos totalmente gerenciado, altamente confiavel e escalável, acessível por meio de protocolo SMB (Server Message Block). Qual servico atenderá ?",
        answers: [
            "Amazon S3",
            "Amazon EFS",
            "Amazon FSx",
            "Amazon EBS"
        ],
        rightAnswers: 2
    },
    {
        question: "Uma empresa precisa configurar e gerenciar centralmente grupos de segurancas da Amazon VPC em várias contas da AWS em uma organizacao no AWS Organizations. Qual servico AWS a empresa deve usar para atender a esses requisitos?",
        answers: [
            "AWS Firewall Manager",
            "Amazon GuardDuty",
            "Amazon Dedetive",
            "AWS WAF"
        ],
        rightAnswers: 0
    },
    {
        question: "Qual tarefa é de responsabiliade da AWS, de acordo com o modelo de responsabiliadde compartilhada da AWS?",
        answers: [
            "Configurar o gerenciamento de identidade e acesso p/ Aplicativos.",
            "Gerenciar opções de criptografia p/ dados armazenados na AWS.",
            "Configurar grupos de segurança p/ instancias do Amazon EC2.",
            "Manter o hardware físico da infraestrutura"
        ],
        rightAnswers: 3
    },
    {
        question: "Uma empresa possui uma instancia do Amazon EC2 em uma sub-rede privada. A Empresa deseja iniciar uma conexão com a Internet p/ obter atualizacoes do sistema operacionao e, ao mesmo tempo, impedir que o tráfego da Internet acesse a instancia do EC2. Qual servico permite?",
        answers: [
            "Endpoint VPC",
            "GatewayNAT",
            "Amazon PrivateLink",
            "Pareamento de VPC"
        ],
        rightAnswers: 3
    },
    {
        question: "Quais acoes sao de responsabilidade da AWS de acordo com o modelo de responsabilidade compartilhada? ESCOLHA DOIS",
        answers: [
            "Protegendo a camada de Virtualizacao",
            "Aplicacao de patches no S.O em instancias do Amazon EC2",
            "Aplicacao de um apolitica de senha rigida do IAM",
            "Aplicacao de patches no S.O em instancias do RDS",
            "Configuracao grupos de seguranca e ACL'S de rede"
        ],
        rightAnswers: [0,3]
    },
    {
        question: " Uma empresa está Armazenando dados que não serão acessados com frequencia na nuvem AWS. Se a empresa precisa acessar os dados, eles deverão ser recuperados em até 12 horas. A empresa deseja uma solucao qeu seja economica para os custos de armazenamento de cada GB. Qual classe de armazenamento S3 atenderá esses requisitos ? ",
        answers: [
            "Padrao S3",
            "Recuperacao Flexivel do Glacier",
            "S3 OneZone-Acesso Infrequente",
            "Acesso infrequente Padrao"
        ],
        rightAnswers: 1
    },
    {
        question: "Qual servico ou recurso AWS pode ser usado para identificar servicos que foram usados por um usuário em um intervalo de datas especificado ?",
        answers: [
            "Lista de Controle de acesso ACL'S do amazon S3",
            "AWS Certificate Manager",
            "Analisador de acesso a rede",
            "Analisador de acesso do AWS IAM"
        ],
        rightAnswers: 3
    },
    {
        question: "Uma empresa precisa contratar consultores terceirizados para ajudar a manter e dar suporte ao seu ambiente AWS e ás necessidades de negócio da empresa. Qual servico ou recurso da AWS atenderá a esses requisitos ?",
        answers: [
            "Suporte AWS",
            "Organizacao AWS",
            "Catalogo de servicos AWS",
            "Rede Parceiros AWS (APN)"
        ],
        rightAnswers: 3
    },
    {
        question: "Uma empresa deseja criar painés do Amazon QuickSight semanalmente usando seus dados de Faturamento. Qual recurso ou ferramentaAWS a empresa pode usar para atender a esses requisitos ?",
        answers: [
            "Orcamentos da AWS",
            "Explorador de custos da AWS",
            "Relatório de custos e Uso AWS",
            "Deteccao de anomalias de custo da AWS"
        ],
        rightAnswers: 2
    },
    {
        question: "Uma empresa está planejando migrar backups de dados para a nuvem AWS. A empresa precisa substituir o armazenamento local por armazenamento baseado em nuvem, mas armazenando em cache localmente. Qual servico da AWS atende a esses requisitos ?",
        answers: [
            "AWS Storage Gateway",
            "AWS SnowCone",
            "Backup AWS",
            "Amazon Elastic File SYstem (EFS)"
        ],
        rightAnswers: 0
    },
    {
        question: "Uma empresa precisa organizar seus recursos e acompanhar os custos da AWS detalhadamente. A empresa precisa categorizar os custos por departamento de negócios, ambiente e aplicacao. Qual solucao atenderá a esses requisitos?",
        answers: [
            "Acesse o console do AWS CostManagement para organizar ercursos, definir orcamentos da AWS e receber notificacoes de uso nao intencional.",
            "Use tags p/ organizar os recursos. Ative tags de alocacao de custos para rastrear os custos da AWS em nível detalhado",
            "Crie painés do AmazonCloudWatch p/ organizar visualmente e rastrear custos individualmente.",
            "Acesse o painel do AWS Billing And Cost Management p organizar e rastrear o consumo de recursos em nível detalhado.a"
        ],
        rightAnswers: 1
    },
    {
        question: "Uma empresa precisa planejar, agendar e executar centenas de milhares de trabalhos de computacao na nuvem AWS. Qual servico AWS a empresa pode usar para atender a esse requisito ? ",
        answers: [
            "Funcoes de etapas da AWS",
            "Catalago de servicos AWS",
            "SQS",
            "Lote AWS"
        ],
        rightAnswers: 3
    },
    {
        question: "Quais servicos ou recursos da AWS oferecem alta disponibilidade e baixa latencia, permitindo failover em diferentes regioes AWS? ESCOLHA DOIS",
        answers: [
            "Route53",
            "Balanceador de carga",
            "Aceleracao de Transfericias Amazon S3",
            "Acelerador Global AWS",
            "Balanceador de carga de aplicativo"
        ],
        rightAnswers: [0,3]
    },
    {
        question: "Qual das alternativas a seguir é uma maneira de usar grupos EC2Auto Scalling para dimensionar a capaciadde da Nuvem AWS?",
        answers: [
            "Dimensione automaticamente o número de instancias EC2, com base na demanda.",
            "Use instancias EC2 sem servidor",
            "Aumente ou diminua o tamanho das instancias do EC2 automaticamente, com base na demanda.",
            "Transferir recursos de cpu nao utilizados entre instancias EC2"
        ],
        rightAnswers: 0
    },
    {
        question: "Quais habilidades sao beneficios da Nuvem aws? ESCOLHA DOIS",
        answers: [
            "Troque despesas variáveis por despesas de capital",
            "Implante globalmente em minutos",
            "Planejar a capacidade antes das implantacoes",
            "Tirar aprtido das ecvonomias de escala",
            "Reduza as dependencias de conectividade de rede"
        ],
        rightAnswers: [1,3]
    }
]

export const allSimulates: Question[][]= [
    s1,
    s2,
    s3,
    s4,
    s5,
]
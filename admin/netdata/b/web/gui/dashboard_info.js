// SPDX-License-Identifier: GPL-3.0-or-later

// Codacy declarations
/* global NETDATA */

var netdataDashboard = window.netdataDashboard || {};

// Informational content for the various sections of the GUI (menus, sections, charts, etc.)

// ----------------------------------------------------------------------------
// Menus

netdataDashboard.menu = {
    'system': {
        title: '系统概况',
        icon: '<i class="fas fa-bookmark"></i>',
        info: '一眼掌握系统信息关键指标'
    },

    'services': {
        title: '系统服务',
        icon: '<i class="fas fa-cogs"></i>',
        info: '系统服务的使用情况。netdata以CGROUPS监视所有系统服务。'
    },

    'ap': {
        title: 'Access Points',
        icon: '<i class="fas fa-wifi"></i>',
        info: '在系统上找到的接入点（即AP模式下的无线接口）的性能指标。'
    },

    'tc': {
        title: 'Quality of Service',
        icon: '<i class="fas fa-globe"></i>',
        info: 'Netdata collects and visualizes <code>tc</code> class utilization using its ' +
            '<a href="https://github.com/netdata/netdata/blob/master/collectors/tc.plugin/tc-qos-helper.sh.in" target="_blank">tc-helper plugin</a>. ' +
            'If you also use <a href="http://firehol.org/#fireqos" target="_blank">FireQOS</a> for setting up QoS, ' +
            'netdata automatically collects interface and class names. If your QoS configuration includes overheads ' +
            'calculation, the values shown here will include these overheads (the total bandwidth for the same ' +
            'interface as reported in the Network Interfaces section, will be lower than the total bandwidth ' +
            'reported here). QoS data collection may have a slight time difference compared to the interface ' +
            '(QoS data collection uses a BASH script, so a shift in data collection of a few milliseconds ' +
            'should be justified).'
    },

    'net': {
        title: '网络信息',
        icon: '<i class="fas fa-sitemap"></i>',
        info: '网络接口的详细信息。'
    },

    'ip': {
        title: '网路堆叠',
        icon: '<i class="fas fa-cloud"></i>',
        info: function (os) {
            if (os === "linux")
                return '系统网络堆栈的度量标准。这些度量标准收集从<code>/proc/net/netstat</code>，适用于IPv4和IPv6两个交通和相关的内核网络栈的操作。';
            else
                return '系统网络堆栈的度量标准。';
        }
    },

    'ipv4': {
        title: 'IPv4网络',
        icon: '<i class="fas fa-cloud"></i>',
        info: 'IPv4系统信息。' +
            '<a href="https://en.wikipedia.org/wiki/IPv4" target="_blank">Internet Protocol version 4 (IPv4)</a> 是 ' +
            '互联网协议（IP）的第四个版本。它是基于标准的核心协议之一 ' +
            '互联网中的互联网方法。IPv4是用于分组交换的无连接协议网络。' +
            '它采用尽力而为的交付模式，因为它不保证交付， ' +
            '也不保证正确的顺序或避免重复交付。这些方面 ' +
            '（包括数据完整性）由上层传输协议（如传输控制协议（TCP））处理。'
    },

    'ipv6': {
        title: 'IPv6 网络',
        icon: '<i class="fas fa-cloud"></i>',
        info: 'IPv6系统信息。<a href="https://en.wikipedia.org/wiki/IPv6" target="_blank">互联网协议版本6 (IPv6)</a> 是Internet协议（IP）的最新版本，该通信协议为网络上的计算机提供标识和定位系统，并在Internet上路由通信。IPv6是由Internet工程任务组（IETF）开发的，用于解决人们期待已久的IPv4地址耗尽问题。 IPv6旨在替代IPv4。'
    },

    'sctp': {
        title: 'SCTP网络',
        icon: '<i class="fas fa-cloud"></i>',
        info: '<a href="https://en.wikipedia.org/wiki/Stream_Control_Transmission_Protocol" target="_blank">Stream Control Transmission Protocol (SCTP)</a>是一种在传输层运行的计算机网络协议，其作用类似于流行的协议TCP和UDP。 SCTP提供了UDP和TCP的一些功能：它像UDP这样面向消息，并通过拥塞控制（如TCP）确保可靠，按顺序传输消息。 它与那些协议的不同之处在于，它提供了多宿主和冗余路径以提高弹性和可靠性。'
    },

    'ipvs': {
        title: 'IP虚拟服务器',
        icon: '<i class="fas fa-eye"></i>',
        info: '<a href="http://www.linuxvirtualserver.org/software/ipvs.html" target="_blank">IPVS (IP Virtual Server)</a> 在Linux内核内部实现传输层负载平衡，即所谓的第4层交换。 在主机上运行的IPVS充当真实服务器群集前端的负载平衡器，它可以将对基于TCP / UDP的服务的请求定向到真实服务器，并使真实服务器的服务在服务器上显示为虚拟服务。 单个IP地址。'
    },

    'netfilter': {
        title: '防火墙 (netfilter)',
        icon: '<i class="fas fa-shield-alt"></i>',
        info: 'netfilter组件的系统信息。'
    },

    'ipfw': {
        title: '防火墙 (ipfw)',
        icon: '<i class="fas fa-shield-alt"></i>',
        info: '防火墙(ipfw)规则的计数器和内存使用情况。'
    },

    'cpu': {
        title: 'CPU',
        icon: '<i class="fas fa-bolt"></i>',
        info: '系统中CPU的详细信息。全部CPU的信息可以到<a href="#menu_system"> 系统概况</a> 查看。'
    },

    'mem': {
        title: '内存',
        icon: '<i class="fas fa-microchip"></i>',
        info: '系统内存的详细信息。'
    },

    'disk': {
        title: '存储',
        icon: '<i class="fas fa-hdd"></i>',
        info: '系统中所有存储性能信息图表。这是以<code>iostat -x</code>所取得的数据做为显示。在预设情况下netdata 不会显示单一分区与未挂载的虚拟磁盘性能图表。若仍想要显示，可以修改netdata设定中的相关设定。'
    },

    'sensors': {
        title: '温度检测',
        icon: '<i class="fas fa-leaf"></i>',
        info: '系统已配置相关测温器的数据'
    },

    'ipmi': {
        title: 'IPMI',
        icon: '<i class="fas fa-leaf"></i>',
        info: '智能平台管理接口（IPMI）是用于计算机系统的一组计算机接口规范，它独立于主机系统的CPU，固件（BIOS或UEFI）和操作系统提供管理和监视功能。'
    },

    'samba': {
        title: '网络共享',
        icon: '<i class="fas fa-folder-open"></i>',
        info: 'Samba文件的性能指标共享此系统的操作。Samba是Windows服务的实现，包括Windows SMB协议文件共享。'
    },

    'nfsd': {
        title: 'NFS服务器',
        icon: '<i class="fas fa-folder-open"></i>',
        info: '网络文件服务器的性能指标。NFS是一种分布式文件系统协议，它允许客户端计算机上的用户通过网络访问文件，就像访问本地存储一样。 像许多其他协议一样，NFS建立在开放网络计算远程过程调用（ONC RPC）系统上。 NFS是在注释请求（RFC）中定义的开放标准。'
    },

    'nfs': {
        title: 'NFS客户端',
        icon: '<i class="fas fa-folder-open"></i>',
        info: '显示本机NFS客户端的性能能指标。'
    },

    'zfs': {
        title: 'ZFS文件系统',
        icon: '<i class="fas fa-folder-open"></i>',
        info: 'ZFS文件系统的性能指标。以下图表显示了<a href="https://github.com/zfsonlinux/zfs/blob/master/cmd/arcstat/arcstat" target="_blank">arcstat.py</a> 与 <a href="https://github.com/zfsonlinux/zfs/blob/master/cmd/arc_summary/arc_summary3" target="_blank">arc_summary.py</a>的性能数据。'
    },

    'btrfs': {
        title: 'BTRFS文件系统',
        icon: '<i class="fas fa-folder-open"></i>',
        info: 'BTRFS文件系统的磁盘空间信息。'
    },

    'apps': {
        title: '应用程序',
        icon: '<i class="fas fa-heartbeat"></i>',
        info: '使用netdata的<code>apps.plugin</code>收集每个应用程序的统计信息。\'s 该插件遍历所有进程并汇总感兴趣的应用程序的统计信息，报告的值与<code>top</code>兼容，尽管netdata插件也计算已退出子进程的资源(与仅显示当前运行进程的资源的<code>top</code>不同)。因此，对于shell脚本之类的进程，报告的值包括这些脚本在每个时间段内运行的命令所使用的资源。',
        height: 1.5
    },

    'users': {
        title: '用户',
        icon: '<i class="fas fa-user"></i>',
        info: 'netdata使用了<code>apps.plugin</code>收集每个应用程序的统计信息。\'s 该插件遍历所有进程并汇总感兴趣的应用程序的统计信息，报告的值与<code>top</code>兼容，尽管netdata插件也计算已退出子进程的资源(与仅显示当前运行进程的资源的<code>top</code>不同)。因此，对于shell脚本之类的进程，报告的值包括这些脚本在每个时间段内运行的命令所使用的资源。',
        height: 1.5
    },

    'groups': {
        title: '用户组',
        icon: '<i class="fas fa-users"></i>',
        info: 'netdata使用了<code>apps.plugin</code>收集每个应用程序的统计信息。\'s 该插件遍历所有进程并汇总感兴趣的应用程序的统计信息，报告的值与<code>top</code>兼容，尽管netdata插件也计算已退出子进程的资源(与仅显示当前运行进程的资源的<code>top</code>不同)。因此，对于shell脚本之类的进程，报告的值包括这些脚本在每个时间段内运行的命令所使用的资源。',
        height: 1.5
    },

    'netdata': {
        title: 'Netdata监视',
        icon: '<i class="fas fa-chart-bar"></i>',
        info: 'netdata本身与外置应用的统计信息。'
    },

    'aclk_test': {
        title: 'ACLK Test Generator',
        info: '供内部使用以执行集成测试。'
    },

    'example': {
        title: '图表示例',
        info: '图表示例，展示了外部插件架构。'
    },

    'cgroup': {
        title: '',
        icon: '<i class="fas fa-th"></i>',
        info: '容器资源使用率指标。netdata从<b>cgroups</b> (<b>control groups</b> 的缩写) 中读取这些资讯，cgroups是Linux 核心的一个功能，做限制与计算程序集中的资源使用率 (CPU、内存、存储 I/O、网络...等等)。<b>cgroups</b>与<b>namespaces</b> (程序之间的隔离) 结合提供了我们所说的：<b>容器</b>。'
    },

    'cgqemu': {
        title: '',
        icon: '<i class="fas fa-th-large"></i>',
        info: 'QEMU 虚拟机资源使用率效能指标。QEMU(Quick Emulator)是自由与开源的虚拟机器平台，提供硬体虚拟化功能。'
    },

    'fping': {
        title: 'fping',
        icon: '<i class="fas fa-exchange-alt"></i>',
        info: '通过<b>fping</b>的网络延迟统计信息。<b>fping</b>是一个程序，用于向网络主机发送ICMP回声探测，类似于<code>ping</code>，但是在ping多个主机时性能要好得多。 3.15之后的fping版本可以直接用作netdata插件。'
    },

    'gearman': {
        title: 'Gearman',
        icon: '<i class="fas fa-tasks"></i>',
        info: 'Gearman是一个作业服务器，允许您并行执行工作，进行负载平衡处理以及在语言之间调用函数。'
    },

    'ioping': {
        title: 'ioping',
        icon: '<i class="fas fa-exchange-alt"></i>',
        info: 'Disk latency statistics, via <b>ioping</b>. <b>ioping</b> is a program to read/write data probes from/to a disk.'
    },

    'httpcheck': {
        title: 'Http检查',
        icon: '<i class="fas fa-heartbeat"></i>',
        info: '使用HTTP检查的Web服务可用性和延迟监视。 该插件是端口检查插件的专用版本。'
    },

    'memcached': {
        title: '内存缓存',
        icon: '<i class="fas fa-database"></i>',
        info: 'memcached的性能指标<b>memcached</b>。Memcached是一个通用的分布式内存缓存系统。它通常用于通过在RAM中缓存数据和对象来加速动态数据库驱动的网站，以减少必须读取外部数据源（如数据库或API）的次数。'
    },

    'monit': {
        title: 'monit',
        icon: '<i class="fas fa-database"></i>',
        info: '<b>monit</b>中的检查状态。Monit是用于管理和监视Unix系统上的进程，程序，文件，目录和文件系统的实用程序。 Monit会执行自动维护和修复，并且可以在错误情况下执行有意义的因果操作。'
    },

    'mysql': {
        title: 'MySQL',
        icon: '<i class="fas fa-database"></i>',
        info: 'Performance metrics for <b>mysql</b>, the open-source relational database management system (RDBMS).'
    },

    'postgres': {
        title: 'Postgres',
        icon: '<i class="fas fa-database"></i>',
        info: 'Performance metrics for <b>PostgresSQL</b>, the object-relational database (ORDBMS).'
    },

    'redis': {
        title: 'Redis',
        icon: '<i class="fas fa-database"></i>',
        info: '<b>redis</b>的性能指标。Redis（远程字典服务器）是一个实现数据结构服务器的软件项目。 它是开源的，网络的，内存中的，并存储具有可选持久性的密钥。'
    },

    'rethinkdbs': {
        title: 'RethinkDB',
        icon: '<i class="fas fa-database"></i>',
        info: '<b>rethinkdb</b>的信息。RethinkDB是第一个为实时应用程序构建的开源可伸缩数据库'
    },

    'retroshare': {
        title: 'RetroShare',
        icon: '<i class="fas fa-share-alt"></i>',
        info: '<b>RetroShare</b>的信息。RetroShare是基于GNU Privacy Guard（GPG）建立的朋友网络的开源软件，用于加密文件共享，无服务器电子邮件，即时消息，在线聊天和BBS'
    },

    'riakkv': {
        title: 'Riak KV',
        icon: '<i class="fas fa-database"></i>',
        info: 'Metrics for <b>Riak KV</b>, the distributed key-value store.'
    },

    'ipfs': {
        title: 'IPFS',
        icon: '<i class="fas fa-folder-open"></i>',
        info: '行星际文件系统（IPFS）的信息，这是一种内容可寻址的对等超媒体分发协议。'
    },

    'phpfpm': {
        title: 'PHP-FPM',
        icon: '<i class="fas fa-eye"></i>',
        info: 'Performance metrics for <b>PHP-FPM</b>, an alternative FastCGI implementation for PHP.'
    },

    'pihole': {
        title: 'Pi-hole',
        icon: '<i class="fas fa-ban"></i>',
        info: 'Metrics for <a href="https://pi-hole.net/" target="_blank">Pi-hole</a>, a black hole for Internet advertisements.' +
            ' The metrics returned by Pi-Hole API is all from the last 24 hours.'
    },

    'portcheck': {
        title: '端口检查',
        icon: '<i class="fas fa-heartbeat"></i>',
        info: '使用端口检查的服务可用性和延迟监视。'
    },

    'postfix': {
        title: 'postfix',
        icon: '<i class="fas fa-envelope"></i>',
        info: undefined
    },

    'dovecot': {
        title: 'Dovecot',
        icon: '<i class="fas fa-envelope"></i>',
        info: undefined
    },

    'hddtemp': {
        title: 'HDD Temp',
        icon: '<i class="fas fa-thermometer-half"></i>',
        info: undefined
    },

    'nginx': {
        title: 'nginx',
        icon: '<i class="fas fa-eye"></i>',
        info: undefined
    },

    'apache': {
        title: 'Apache',
        icon: '<i class="fas fa-eye"></i>',
        info: undefined
    },

    'lighttpd': {
        title: 'Lighttpd',
        icon: '<i class="fas fa-eye"></i>',
        info: undefined
    },

    'web_log': {
        title: undefined,
        icon: '<i class="fas fa-file-alt"></i>',
        info: 'Information extracted from a server log file. <code>web_log</code> plugin incrementally parses the server log file to provide, in real-time, a break down of key server performance metrics. For web servers, an extended log file format may optionally be used (for <code>nginx</code> and <code>apache</code>) offering timing information and bandwidth for both requests and responses. <code>web_log</code> plugin may also be configured to provide a break down of requests per URL pattern (check <a href="https://github.com/netdata/netdata/blob/master/collectors/python.d.plugin/web_log/web_log.conf" target="_blank"><code>/etc/netdata/python.d/web_log.conf</code></a>).'
    },

    'named': {
        title: 'named',
        icon: '<i class="fas fa-tag"></i>',
        info: undefined
    },

    'squid': {
        title: 'squid',
        icon: '<i class="fas fa-exchange-alt"></i>',
        info: undefined
    },

    'nut': {
        title: 'UPS',
        icon: '<i class="fas fa-battery-half"></i>',
        info: undefined
    },

    'apcupsd': {
        title: 'UPS',
        icon: '<i class="fas fa-battery-half"></i>',
        info: undefined
    },

    'smawebbox': {
        title: 'Solar Power',
        icon: '<i class="fas fa-sun"></i>',
        info: undefined
    },

    'fronius': {
        title: 'Fronius',
        icon: '<i class="fas fa-sun"></i>',
        info: undefined
    },

    'stiebeleltron': {
        title: 'Stiebel Eltron',
        icon: '<i class="fas fa-thermometer-half"></i>',
        info: undefined
    },

    'snmp': {
        title: 'SNMP',
        icon: '<i class="fas fa-random"></i>',
        info: undefined
    },

    'go_expvar': {
        title: 'Go - expvars',
        icon: '<i class="fas fa-eye"></i>',
        info: 'Statistics about running Go applications exposed by the <a href="https://golang.org/pkg/expvar/" target="_blank">expvar package</a>.'
    },

    'chrony': {
        icon: '<i class="fas fa-clock"></i>',
        info: 'chronyd parameters about the system’s clock performance.'
    },

    'couchdb': {
        icon: '<i class="fas fa-database"></i>',
        info: 'Performance metrics for <b><a href="https://couchdb.apache.org/">CouchDB</a></b>, the open-source, JSON document-based database with an HTTP API and multi-master replication.'
    },

    'beanstalk': {
        title: 'Beanstalkd',
        icon: '<i class="fas fa-tasks"></i>',
        info: 'Provides statistics on the <b><a href="http://kr.github.io/beanstalkd/">beanstalkd</a></b> server and any tubes available on that server using data pulled from beanstalkc'
    },

    'rabbitmq': {
        title: 'RabbitMQ',
        icon: '<i class="fas fa-comments"></i>',
        info: 'Performance data for the <b><a href="https://www.rabbitmq.com/">RabbitMQ</a></b> open-source message broker.'
    },

    'ceph': {
        title: 'Ceph',
        icon: '<i class="fas fa-database"></i>',
        info: 'Provides statistics on the <b><a href="http://ceph.com/">ceph</a></b> cluster server, the open-source distributed storage system.'
    },

    'ntpd': {
        title: 'ntpd',
        icon: '<i class="fas fa-clock"></i>',
        info: '提供有关网络时间协议守护程序<b><a href="http://www.ntp.org/">ntpd</a></b>的内部变量的统计信息，并且还包括配置的对等项（如果启用）在模块配置中）。该模块显示性能指标，如<b><a href="http://doc.ntp.org/current-stable/ntpq.html">ntpq</a></b>（标准NTP查询）所示程序）使用NTP模式6 UDP数据包与NTP服务器进行通信。'
    },

    'spigotmc': {
        title: 'Spigot MC',
        icon: '<i class="fas fa-eye"></i>',
        info: 'Provides basic performance statistics for the <b><a href="https://www.spigotmc.org/">Spigot Minecraft</a></b> server.'
    },

    'unbound': {
        title: 'Unbound',
        icon: '<i class="fas fa-tag"></i>',
        info: undefined
    },

    'boinc': {
        title: 'BOINC',
        icon: '<i class="fas fa-microchip"></i>',
        info: 'Provides task counts for <b><a href="http://boinc.berkeley.edu/">BOINC</a></b> distributed computing clients.'
    },

    'w1sensor': {
        title: '1-Wire Sensors',
        icon: '<i class="fas fa-thermometer-half"></i>',
        info: 'Data derived from <a href="https://en.wikipedia.org/wiki/1-Wire">1-Wire</a> sensors.  Currently temperature sensors are automatically detected.'
    },

    'logind': {
        title: 'Logind',
        icon: '<i class="fas fa-user"></i>',
        info: undefined
    },

    'powersupply': {
        title: '电源',
        icon: '<i class="fas fa-battery-half"></i>',
        info: '各种系统电源的统计信息。从<a href="https://www.kernel.org/doc/Documentation/power/power_power_supply_class.txt">Linux电源类别</a>收集的数据。'
    },

    'xenstat': {
        title: 'Xen Node',
        icon: '<i class="fas fa-server"></i>',
        info: 'Xen节点的常规统计信息。使用<b>xenstat</b> library</a>收集的数据。'
    },

    'xendomain': {
        title: '',
        icon: '<i class="fas fa-th-large"></i>',
        info: 'Xen域资源利用率指标。Netdata使用 <b>xenstat</b> 读取此信息，该库可访问虚拟机的资源使用信息（CPU，内存，磁盘I/O，网络）。'
    },

    'wmi': {
        title: 'wmi',
        icon: '<i class="fas fa-server"></i>',
        info: undefined
    },

    'perf': {
        title: 'Perf Counters',
        icon: '<i class="fas fa-tachometer-alt"></i>',
        info: '性能监视计数器（PMC）。系统硬件调用<b>perf_event_open()</b>收集的数据，该调用利用了硬件性能监视单元（PMU）。'
    },

    'vsphere': {
        title: 'vSphere',
        icon: '<i class="fas fa-server"></i>',
        info: 'Performance statistics for ESXI hosts and virtual machines. Data collected from <a href="https://www.vmware.com/products/vcenter-server.html">VMware vCenter Server</a> using <code><a href="https://github.com/vmware/govmomi"> govmomi</a></code>  library.'
    },

    'vcsa': {
        title: 'VCSA',
        icon: '<i class="fas fa-server"></i>',
        info: 'vCenter Server Appliance health statistics. Data collected from <a href="https://vmware.github.io/vsphere-automation-sdk-rest/vsphere/index.html#SVC_com.vmware.appliance.health">Health API</a>.'
    },

    'zookeeper': {
        title: 'Zookeeper',
        icon: '<i class="fas fa-database"></i>',
        info: 'Provides health statistics for <b><a href="https://zookeeper.apache.org/">Zookeeper</a></b> server. Data collected through the command port using <code><a href="https://zookeeper.apache.org/doc/r3.5.5/zookeeperAdmin.html#sc_zkCommands">mntr</a></code> command.'
    },

    'hdfs': {
        title: 'HDFS',
        icon: '<i class="fas fa-folder-open"></i>',
        info: 'Provides <b><a href="https://hadoop.apache.org/docs/r3.2.0/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html">Hadoop Distributed File System</a></b> performance statistics. Module collects metrics over <code>Java Management Extensions</code> through the web interface of an <code>HDFS</code> daemon.'
    },

    'am2320': {
        title: 'AM2320 Sensor',
        icon: '<i class="fas fa-thermometer-half"></i>',
        info: '来自外部AM2320传感器的读数。'
    },

    'scaleio': {
        title: 'ScaleIO',
        icon: '<i class="fas fa-database"></i>',
        info: '各种ScaleIO组件的性能和运行状况统计信息。通过VxFlex OS网关REST API收集的数据。'
    },

    'squidlog': {
        title: 'Squid log',
        icon: '<i class="fas fa-file-alt"></i>',
        info: undefined
    },

    'cockroachdb': {
        title: 'CockroachDB',
        icon: '<i class="fas fa-database"></i>',
        info: 'Performance and health statistics for various <code>CockroachDB</code> components.'
    },

    'ebpf': {
        title: 'eBPF',
        icon: '<i class="fas fa-heartbeat"></i>',
        info: 'Monitor system calls, internal functions, bytes read, bytes written and errors using <code>eBPF</code>.'
    },

    'vernemq': {
        title: 'VerneMQ',
        icon: '<i class="fas fa-comments"></i>',
        info: 'Performance data for the <b><a href="https://vernemq.com/">VerneMQ</a></b> open-source MQTT broker.'
    },

    'pulsar': {
        title: 'Pulsar',
        icon: '<i class="fas fa-comments"></i>',
        info: 'Summary, namespaces and topics performance data for the <b><a href="http://pulsar.apache.org/">Apache Pulsar</a></b> pub-sub messaging system.'
    },
};


// ----------------------------------------------------------------------------
// submenus

// information to be shown, just below each submenu

// information about the submenus
netdataDashboard.submenu = {
    'web_log.squid_bandwidth': {
        title: '带宽',
        info: 'squid的响应带宽(<code>发送</code>)。此图表可能会出现异常峰值，因为带宽是在服务器保存日志行时计算的，即使服务日志行所需的时间跨越较长的持续时间。我们建议使用QoS(e.g. <a href="http://firehol.org/#fireqos" target="_blank">FireQOS</a>)精确计算服务器带宽。'
    },

    'web_log.squid_responses': {
        title: '响应',
        info: '与squid发送的响应有关的信息。'
    },

    'web_log.squid_requests': {
        title: '请求',
        info: 'squid已收到与请求相关的信息。'
    },

    'web_log.squid_hierarchy': {
        title: '等级制',
        info: '用于服务请求的squid层次结构的性能指标。'
    },

    'web_log.squid_squid_transport': {
        title: 'transport'
    },

    'web_log.squid_squid_cache': {
        title: 'squid缓存',
        info: 'squid缓存性能的性能指标。'
    },

    'web_log.squid_timings': {
        title: 'squid请求的持续时间',
        info: 'squid请求的持续时间。可能会报告不现实的峰值，因为squid会记录请求完成时的总时间。特别是对于HTTPS，客户端从代理服务器获得一个隧道，并直接与上游服务器交换请求，因此squid无法评估单个请求并报告隧道打开的总时间。'
    },

    'web_log.squid_clients': {
        title: 'clients'
    },

    'web_log.bandwidth': {
        info: '请求（<code>received</code>）和响应（<code>sent</code>）的带宽。<code>received</code>需要扩展的日志格式（如果没有，则Web服务器日志不包含此信息）。该图表可能会出现异常的峰值，因为带宽是在Web服务器保存日志行时计算的，即使为它服务所需的时间跨越了更长的持续时间。我们建议使用QoS（例如<a href="http://firehol.org/#fireqos" target="_blank">FireQOS</a>）来准确计算Web服务器带宽。'
    },

    'web_log.urls': {
        info: 'Number of requests for each <code>URL pattern</code> defined in <a href="https://github.com/netdata/netdata/blob/master/collectors/python.d.plugin/web_log/web_log.conf" target="_blank"><code>/etc/netdata/python.d/web_log.conf</code></a>. This chart counts all requests matching the URL patterns defined, independently of the web server response codes (i.e. both successful and unsuccessful).'
    },

    'web_log.clients': {
        info: 'Charts showing the number of unique client IPs, accessing the web server.'
    },

    'web_log.timings': {
        info: 'Web server response timings - the time the web server needed to prepare and respond to requests. This requires an extended log format and its meaning is web server specific. For most web servers this accounts the time from the reception of a complete request, to the dispatch of the last byte of the response. So, it includes the network delays of responses, but it does not include the network delays of requests.'
    },

    'mem.ksm': {
        title: 'deduper (ksm)',
        info: 'Kernel Same-page Merging (KSM)性能监视，从<code>/sys/Kernel/mm/KSM/</code>中的多个文件读取。KSM是Linux内核中一种节省内存的重复数据消除功能（从版本2.6.32开始）。KSM守护进程ksmd定期扫描已注册的用户内存区域，查找可由单个写保护页替换的相同内容的页（如果进程稍后要更新其内容，则会自动复制该页）。KSM最初是为与KVM（在KVM中称为内核共享内存）一起使用而开发的，目的是通过共享虚拟机之间的公共数据，将更多虚拟机装入物理内存。但是对于生成同一数据的多个实例的任何应用程序都是有用的。'
    },

    'mem.hugepages': {
        info: 'Hugepages is a feature that allows the kernel to utilize the multiple page size capabilities of modern hardware architectures. The kernel creates multiple pages of virtual memory, mapped from both physical RAM and swap. There is a mechanism in the CPU architecture called "Translation Lookaside Buffers" (TLB) to manage the mapping of virtual memory pages to actual physical memory addresses. The TLB is a limited hardware resource, so utilizing a large amount of physical memory with the default page size consumes the TLB and adds processing overhead. By utilizing Huge Pages, the kernel is able to create pages of much larger sizes, each page consuming a single resource in the TLB. Huge Pages are pinned to physical RAM and cannot be swapped/paged out.'
    },

    'mem.numa': {
        info: 'Non-Uniform Memory Access (NUMA) 是一种内存存取分隔设计，在NUMA之下，一个处理器存取自己管理的的内存，将比非自己管理的内存(另一个处理器所管理的内存或是共用内存) 具有更快速的效能。在 <a href="https://www.kernel.org/doc/Documentation/numastat.txt" target="_blank">Linux 核心文件</a> 中有详细说明这些指标。'
    },

    'ip.ecn': {
        info: '<a href="https://en.wikipedia.org/wiki/Explicit_Congestion_Notification" target="_blank">Explicit Congestion Notification (ECN)</a> is a TCP extension that allows end-to-end notification of network congestion without dropping packets. ECN is an optional feature that may be used between two ECN-enabled endpoints when the underlying network infrastructure also supports it.'
    },

    'netfilter.conntrack': {
        title: '连接跟踪器',
        info: 'Netfilter连接跟踪器性能指标。连接跟踪器跟踪计算机的所有连接（入站和出站）。它通过使数据库保持所有打开的连接，跟踪网络和地址转换以及连接期望来工作。'
    },

    'netfilter.nfacct': {
        title: '带宽核算',
        info: '使用<code>nfacct.plugin</code>读取以下信息。'
    },

    'netfilter.synproxy': {
        title: 'DDoS保护',
        info: 'DDoS保护性能指标。<a href="https://github.com/firehol/firehol/wiki/Working-with-SYNPROXY" target="_blank">SYNPROXY</a>是TCP SYN数据包代理。它用于保护任何TCP服务器（例如Web服务器）免受SYN泛滥和类似的DDoS攻击。它是Linux内核（自版本3.12起）中的netfilter模块。它经过优化，可以利用所有可用的CPU每秒处理数百万个数据包，而连接之间没有任何并发锁定。它可以用于任何类型的TCP通信（甚至加密），因为它不会干扰内容本身。'
    },

    'ipfw.dynamic_rules': {
        title: '动态规则',
        info: '由相应的有状态防火墙规则创建的动态规则的数量。'
    },

    'system.softnet_stat': {
        title: 'softnet',
        info: function (os) {
            if (os === 'linux')
                return '与网络接收工作相关的CPU软件IRQ统计。每个CPU核心的故障可以在<a href="#menu_cpu_submenu_softnet_stat">CPU / softnet statistics</a>。<b>已处理的</b>说明已处理的数据包数，<b>已丢弃的</b>是由于网络设备积压已满而丢弃的数据包数（要在Linux上修复它们，请使用<code>sysctl</code>增加<code>net.core.netdev_max_backlog</code>），<b>压缩的</b>是由于网络设备预算耗尽而丢弃的数据包数（要在Linux上修复这些数据包，请使用<code>sysctl</code>增加<code>net.core.netdev_预算</code>和/或<code>net.core.netdev_budget_usecs</code>）。有关识别和排除网络驱动程序相关问题的更多信息，请参阅<a href="https://access.redhat.com/sites/default/files/attachments/20150325_network_performance_tuning.pdf" target="_blank">Red Hat Enterprise Linux网络性能调整指南。';
            else
                return '与网络接收工作相关的CPU软件IRQ统计。';
        }
    },

    'cpu.softnet_stat': {
        title: 'softnet',
        info: function (os) {
            if (os === 'linux')
                return '与网络接收工作相关的每个CPU核心软件的统计。所有CPU核心的总数可以在 <a href="#menu_system_submenu_softnet_stat">信息中找到。<b>已处理的</b>说明已处理的数据包数，<b>已丢弃的</b>是由于网络设备积压已满而丢弃的数据包数（要在Linux上修复它们，请使用<code>sysctl</code>增加<code>net.core.netdev_max_backlog</code>），<b>压缩的</b>是由于网络设备预算耗尽而丢弃的数据包数（要在Linux上修复这些数据包，请使用<code>sysctl</code>增加<code>net.core.netdev_预算</code>和/或<code>net.core.netdev_预算usecs</code>）。有关识别和排除网络驱动程序相关问题的更多信息，请参阅<a href="https://access.redhat.com/sites/default/files/attachments/20150325_network_performance_tuning.pdf" target="_blank">Red Hat Enterprise Linux网络性能调整指南。';
            else
                return 'Statistics for per CPUs core SoftIRQs related to network receive work. Total for all CPU cores can be found at <a href="#menu_system_submenu_softnet_stat">System / softnet statistics</a>.';
        }
    },

    'go_expvar.memstats': {
        title: '内存统计',
        info: '进行运行时内存统计。有关每个图表及其值的更多信息，请参见<a href="https://golang.org/pkg/runtime/#MemStats" target="_blank">runtime.MemStats</a> 文档。'
    },

    'couchdb.dbactivity': {
        title: 'db activity',
        info: '整个数据库对整个服务器的读写。这包括任何外部HTTP通信以及在群集中执行的内部复制通信，以确保节点一致性。'
    },

    'couchdb.httptraffic': {
        title: 'http traffic breakdown',
        info: 'All HTTP traffic, broken down by type of request (<tt>GET</tt>, <tt>PUT</tt>, <tt>POST</tt>, etc.) and response status code (<tt>200</tt>, <tt>201</tt>, <tt>4xx</tt>, etc.)<br/><br/>Any <tt>5xx</tt> errors here indicate a likely CouchDB bug; check the logfile for further information.'
    },

    'couchdb.ops': {
        title: 'server operations'
    },

    'couchdb.perdbstats': {
        title: 'per db statistics',
        info: 'Statistics per database. This includes <a href="http://docs.couchdb.org/en/latest/api/database/common.html#get--db">3 size graphs per database</a>: active (the size of live data in the database), external (the uncompressed size of the database contents), and file (the size of the file on disk, exclusive of any views and indexes). It also includes the number of documents and number of deleted documents per database.'
    },

    'couchdb.erlang': {
        title: 'erlang statistics',
        info: '有关托管CouchDB的Erlang VM的状态的详细信息。这些仅适用于高级用户。峰值消息队列的值较高（> 10e6）通常表示过载情况。'
    },

    'ntpd.system': {
        title: '系统',
        info: '系统变量的统计信息，如阅读列表广告牌<code>ntpq -c rl</code>所示。系统变量的关联ID分配为零，也可以显示在readvar广告牌<code>ntpq -c "rv 0"</code>中。 这些变量在<a href="http://doc.ntp.org/current-stable/discipline.html">时钟纪律算法</a>中用于计算最低和最稳定的偏差。'
    },

    'ntpd.peers': {
        title: 'peers',
        info: 'Statistics of the peer variables for each peer configured in <code>/etc/ntp.conf</code> as shown by the readvar billboard <code>ntpq -c "rv &lt;association&gt;"</code>, while each peer is assigned a nonzero association ID as shown by <code>ntpq -c "apeers"</code>. The module periodically scans for new/changed peers (default: every 60s). <b>ntpd</b> selects the best possible peer from the available peers to synchronize the clock. A minimum of at least 3 peers is required to properly identify the best possible peer.'
    }
};


// ----------------------------------------------------------------------------
// chart

// information works on the context of a chart
// Its purpose is to set:
//
// info: the text above the charts
// heads: the representation of the chart at the top the subsection (second level menu)
// mainheads: the representation of the chart at the top of the section (first level menu)
// colors: the dimension colors of the chart (the default colors are appended)
// height: the ratio of the chart height relative to the default
//

var cgroupCPULimitIsSet = 0;
var cgroupMemLimitIsSet = 0;

netdataDashboard.context = {
    'system.cpu': {
        info: function (os) {
            void (os);
            return 'CPU使用率总表(全部核心)。当数值为100%时，表示您的CPU非常忙碌没有空闲时间。您可以在<a href="#menu_cpu">CPU</a>以及<a href="#menu_apps">应用程序</a> 深入了解每个核心与应用程序的使用情况。'
                + netdataDashboard.sparkline('<br/>请特别注意<b>iowait</b>', 'system.cpu', 'iowait', '%', '，如果它一直处于较高的情况，这表示您的磁盘是效能瓶颈，您的系统效能会明显降低。')
                + netdataDashboard.sparkline('<br/>另一个重要的指标是<b>softirq</b>', 'system.cpu', 'softirq', '%', '，若这个数值持续在较高的情况，很有可能是您的网路驱动部份有问题。');
        },
        valueRange: "[0, 100]"
    },

    'system.load': {
        info: '目前系统的负载，也就是指CPU使用情况或正在等待系统资源(通常是CPU与磁盘)。这三个指标分别是 1、5、15 分钟。系统每5秒会刷新一次。更多的信息可以参考<a href="https://en.wikipedia.org/wiki/Load_(computing)" target="_blank">维基百科</a>的说明。',
        height: 0.7
    },

    'system.cpu_pressure': {
        info: '<a href="https://www.kernel.org/doc/html/latest/accounting/psi.html">Pressure Stall Information</a> ' +
            'identifies and quantifies the disruptions caused by resource contentions. ' +
            'The "some" line indicates the share of time in which at least <b>some</b> tasks are stalled on CPU. ' +
            'The ratios (in %) are tracked as recent trends over 10-, 60-, and 300-second windows.'
    },

    'system.memory_some_pressure': {
        info: '<a href="https://www.kernel.org/doc/html/latest/accounting/psi.html">Pressure Stall Information</a> ' +
            'identifies and quantifies the disruptions caused by resource contentions. ' +
            'The "some" line indicates the share of time in which at least <b>some</b> tasks are stalled on memory. ' +
            'The "full" line indicates the share of time in which <b>all non-idle</b> tasks are stalled on memory simultaneously. ' +
            'In this state actual CPU cycles are going to waste, and a workload that spends extended time in this state is considered to be thrashing. ' +
            'The ratios (in %) are tracked as recent trends over 10-, 60-, and 300-second windows.'
    },

    'system.io_some_pressure': {
        info: '<a href="https://www.kernel.org/doc/html/latest/accounting/psi.html">Pressure Stall Information</a> ' +
            'identifies and quantifies the disruptions caused by resource contentions. ' +
            'The "some" line indicates the share of time in which at least <b>some</b> tasks are stalled on I/O. ' +
            'The "full" line indicates the share of time in which <b>all non-idle</b> tasks are stalled on I/O simultaneously. ' +
            'In this state actual CPU cycles are going to waste, and a workload that spends extended time in this state is considered to be thrashing. ' +
            'The ratios (in %) are tracked as recent trends over 10-, 60-, and 300-second windows.'
    },

    'system.io': {
        info: function (os) {
            var s = '磁盘I/O总计, 包含所有的实体磁盘。您可以在 <a href="#menu_disk">磁盘</a>查看每一个磁盘的详细资讯，也可以在 <a href="#menu_apps">应用程序</a> 了解每个应用程序对于磁盘的使用情况。';

            if (os === 'linux')
                return s + ' 实体磁盘指的是<code>/sys/block</code>中有列出，但是没有在 <code>/sys/devices/virtual/block</code> 的所有磁盘。';
            else
                return s;
        }
    },

    'system.pgpgio': {
        info: '从内存分页到硬盘的I/O。通常是这个系统所有磁盘的总I/O。'
    },

    'system.swapio': {
        info: '所有的Swap I/O。(netdata 会合并显示 <code>输入</code>与<code>输出</code>。如果图表中没有任何数值，则表示为 0。您可以修改这一页的设定，让图表显示固定的角度。'
    },

    'system.pgfaults': {
        info: '所有的Page错误。<b>主要页面错误</b> 表明系统正在使用其交换功能。您可以在<a href="#menu_apps">应用程序监视</a>部分中找到使用交换的应用程序。'
    },

    'system.entropy': {
        colors: '#CC22AA',
        info: '<a href="https://en.wikipedia.org/wiki/Entropy_(computing)" target="_blank">Entropy</a>，是一个主要用于密码术的随机数 (<a href="https://en.wikipedia.org/wiki//dev/random" target="_blank">/dev/random</a>)池。如果Entropy池变空，则需要随机数的进程的运行速度可能会慢很多（这取决于每个程序使用的接口），等待池被补充。 理想情况下，具有高Entropy要求的系统应具有用于该目的的硬件设备（TPM是这样一种设备）。 您也可以安装几个纯软件选件，例如hadged，尽管它们通常仅在服务器中有用。'
    },

    'system.forks': {
        colors: '#5555DD',
        info: '建立新程序的数量。'
    },

    'system.intr': {
        colors: '#DD5555',
        info: 'CPU中断的总数。通过检查<code>system.interrupts</code>，得知每一个中断的细节信息。在<a href="#menu_cpu"> CPU </a>提供每一个CPU核心的中断情形。'
    },

    'system.interrupts': {
        info: 'CPU中断的细节。在<a href="#menu_cpu"> CPU </a>中，依据每个CPU核心分析中断。'
    },

    'system.softirqs': {
        info: 'CPU softirqs的细节。在<a href="#menu_cpu">CPU</a>中，依据每个CPU核心分析softirqs。'
    },

    'system.processes': {
        info: '系统程序。<b>Running</b>显示正在CPU中的程序。<b>Blocked</b>显示目前被挡下无法进入CPU执行的程序，例如：正在等待磁盘完成动作，才能继续。'
    },

    'system.active_processes': {
        info: '所有的系统程序。'
    },

    'system.ctxt': {
        info: '<a href="https://en.wikipedia.org/wiki/Context_switch" target="_blank">Context Switches</a>，是将CPU从一个进程，任务或线程切换到另一进程，任务或线程。 如果有许多进程或线程愿意执行，而只有很少的CPU内核来处理它们，则系统将进行更多上下文切换以平衡其中的CPU资源。 整个过程是计算密集型的。 上下文切换越多，系统运行速度越慢。'
    },

    'system.idlejitter': {
        info: 'Idle jitter 是由netdata计算而得。当一个执行绪要求睡眠 (Sleep) 时，需要几个微秒的时间。当系统要唤醒它时，会量测它用了多少个微秒的时间。要求睡眠与实际睡眠时间的差异就是 <b>idle jitter</b>。这个数字在即时的环境中非常有用，因为 CPU jitter 将会影响服务的品质 (例如 VoIP media gateways)。'
    },

    'system.net': {
        info: function (os) {
            var s = '所有物理网卡的总带宽。不包含<code>lo</code>、VPN、网路桥接、IFB装置、介面聚合(Bond).. 等。将合并显示实体网络界面的带宽使用情况。';

            if (os === 'linux')
                return s + ' 物理是<code>/proc/net/dev</code>中列出的所有网络接口，但在<code>/sys/devices/virtual/net </code>中不存在。';
            else
                return s;
        }
    },

    'system.ip': {
        info: 'IP 总流量。'
    },

    'system.ipv4': {
        info: 'IPv4 总流量。'
    },

    'system.ipv6': {
        info: 'IPv6 总流量。'
    },

    'system.ram': {
        info: '系统随机存取内存(也就是实体内存) 使用情况。'
    },

    'system.swap': {
        info: '系统交换空间(Swap)内存使用情况。Swap空间会在实体内存(RAM)已满的情况下使用。当系统内存已满但还需要使用更多内存情况下，系统内存中的比较没有异动的Page将会被移动到Swap空间(通常是磁盘、磁盘分区或是文件)。'
    },

    // ------------------------------------------------------------------------
    // CPU charts

    'cpu.cpu': {
        commonMin: true,
        commonMax: true,
        valueRange: "[0, 100]"
    },

    'cpu.interrupts': {
        commonMin: true,
        commonMax: true
    },

    'cpu.softirqs': {
        commonMin: true,
        commonMax: true
    },

    'cpu.softnet_stat': {
        commonMin: true,
        commonMax: true
    },

    // ------------------------------------------------------------------------
    // MEMORY

    'mem.ksm_savings': {
        heads: [
            netdataDashboard.gaugeChart('Saved', '12%', 'savings', '#0099CC')
        ]
    },

    'mem.ksm_ratios': {
        heads: [
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-gauge-max-value="100"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="Savings"'
                    + ' data-units="percentage %"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' role="application"></div>';
            }
        ]
    },

    'mem.zram_usage': {
        info: 'ZRAM总RAM使用率指标。ZRAM使用一些内存来存储有关已存储的内存页面的元数据，因此会产生与磁盘大小成比例的开销。 它排除了相同元素填充的页面，因为没有为它们分配任何内存。'
    },

    'mem.zram_savings': {
        info: '显示原始和压缩内存的数据大小。'
    },

    'mem.zram_ratio': {
        heads: [
            netdataDashboard.gaugeChart('压缩率', '12%', 'ratio', '#0099CC')
        ],
        info: '压缩率，计算方式为<code>100 * original_size / compressed_size</code>。 更多意味着更好的压缩和更多的RAM节省。'
    },

    'mem.zram_efficiency': {
        heads: [
            netdataDashboard.gaugeChart('效率', '12%', 'percent', NETDATA.colors[0])
        ],
        commonMin: true,
        commonMax: true,
        valueRange: "[0, 100]",
        info: '内存使用效率，计算方式为<code>100 * original_size / compressed_size</code>。'
    },


    'mem.pgfaults': {
        info: '<a href="https://en.wikipedia.org/wiki/Page_fault" target="_blank">页面错误</a> 是一种中断，称为陷阱，由运行中的程序访问映射到虚拟地址空间中但未实际加载到主存储器中的内存页面时，由计算机硬件引发。 如果在产生故障时将页面加载到内存中，但是在内存管理单元中未将页面标记为正在加载到内存中，则该页面称为次要页面错误或软页面错误。 当系统需要从磁盘或交换内存加载内存页面时，将产生主要页面错误。'
    },

    'mem.committed': {
        colors: NETDATA.colors[3],
        info: 'Committed内存，是指程序分配到的所有内存总计。'
    },

    'mem.available': {
        info: '可用内存是由核心估算而来，也就是使用者空间程序可以使用的RAM总量，而不会造成交换 (Swap) 发生。'
    },

    'mem.writeback': {
        info: '<b>Dirty</b>是等待写入磁盘的内存量。<b>Writeback</b>是主动写入磁盘的内存量。'
    },

    'mem.kernel': {
        info: '内核正在使用的内存总量。<b>Slab</b>是内核用于缓存供自己使用的数据结构的内存量。<b>KernelStack</b>是内核为每个任务分配的内存量。<b>PageTables</b>是分配给页表的最低级别的内存量（页表用于将虚拟地址转换为物理内存地址）。<b>VmallocUsed</b>是用作虚拟地址空间的内存量。'
    },

    'mem.slab': {
        info: '<b>可回收</b>是内核可以重用的内存量。<b>Unreclaimable</b>即使内核缺少内存也无法重用。'
    },

    'mem.hugepages': {
        info: '专用（或直接HugePages是为配置为利用大页面的应用程序保留的内存。即使有可用的免费大页面，大页面也是<b>已使用</b>的内存。'
    },

    'mem.transparent_hugepages': {
        info: '透明HugePages（THP）支持具有大页面的虚拟内存，支持页面大小的自动提升和降级。 它适用于所有用于匿名内存映射和tmpfs / shmem的应用程序。'
    },

    // ------------------------------------------------------------------------
    // network interfaces

    'net.drops': {
        info: 'Packets that have been dropped at the network interface level. These are the same counters reported by <code>ifconfig</code> as <code>RX dropped</code> (inbound) and <code>TX dropped</code> (outbound). <b>inbound</b> packets can be dropped at the network interface level due to <a href="#menu_system_submenu_softnet_stat">softnet backlog</a> overflow, bad / unintented VLAN tags, unknown or unregistered protocols, IPv6 frames when the server is not configured for IPv6. Check <a href="https://www.novell.com/support/kb/doc.php?id=7007165" target="_blank">this document</a> for more information.'
    },

    // ------------------------------------------------------------------------
    // IP

    'ip.inerrors': {
        info: 'Errors encountered during the reception of IP packets. ' +
            '<code>noroutes</code> (<code>InNoRoutes</code>) counts packets that were dropped because there was no route to send them. ' +
            '<code>truncated</code> (<code>InTruncatedPkts</code>) counts packets which is being discarded because the datagram frame didn\'t carry enough data. ' +
            '<code>checksum</code> (<code>InCsumErrors</code>) counts packets that were dropped because they had wrong checksum. '
    },

    'ip.tcpmemorypressures': {
        info: 'Number of times a socket was put in <b>memory pressure</b> due to a non fatal memory allocation failure (the kernel attempts to work around this situation by reducing the send buffers, etc).'
    },

    'ip.tcpconnaborts': {
        info: 'TCP连接异常终止。<b>baddata</b> (<code>TCPAbortOnData</code>)在连接处于<code>FIN_WAIT1</code> 上时发生，并且内核接收到该连接的序列号超出最后一个的数据包，内核以<code>RST</code>响应（关闭连接）。<b>userclosed</b> (<code>TCPAbortOnClose</code>) 在内核通过已关闭的连接接收数据并以 <code>RST</code>响应时发生。<b>nomemory</b> (<code>TCPAbortOnMemory</code>发生在孤立套接字过多（未附加到fd）并且内核必须断开连接的情况下，有时它将发送<code>RST</code>，有时不会。<b>timeout</b> (<code>TCPAbortOnTimeout</code>) 在连接超时时发生。<b>linger</b> (<code>TCPAbortOnLinger</code>)发生在内核杀死了一个已经被应用程序关闭并且已经徘徊了很长时间的套接字时。<b>failed</b> (<code>TCPAbortFailed</code>)发生在内核试图发送<code>RST</ code>，但失败，因为没有可用的内存。'
    },

    'ip.tcp_syn_queue': {
        info: 'The <b>SYN queue</b> of the kernel tracks TCP handshakes until connections get fully established. ' +
            'It overflows when too many incoming TCP connection requests hang in the half-open state and the server ' +
            'is not configured to fall back to SYN cookies*. Overflows are usually caused by SYN flood DoS attacks ' +
            '(i.e. someone sends lots of SYN packets and never completes the handshakes). ' +
            '<b>drops</b> (or <code>TcpExtTCPReqQFullDrop</code>) is the number of connections dropped because the ' +
            'SYN queue was full and SYN cookies were disabled. ' +
            '<b>cookies</b> (or <code>TcpExtTCPReqQFullDoCookies</code>) is the number of SYN cookies sent because the ' +
            'SYN queue was full.'
    },

    'ip.tcp_accept_queue': {
        info: 'The <b>accept queue</b> of the kernel holds the fully established TCP connections, waiting to be handled ' +
            'by the listening application. <b>overflows</b> (or <code>ListenOverflows</code>) is the number of ' +
            'established connections that could not be handled because the receive queue of the listening application ' +
            'was full. <b>drops</b> (or <code>ListenDrops</code>) is the number of incoming ' +
            'connections that could not be handled, including SYN floods, overflows, out of memory, security issues, ' +
            'no route to destination, reception of related ICMP messages, socket is broadcast or multicast.'
    },


    // ------------------------------------------------------------------------
    // IPv4

    'ipv4.tcpsock': {
        info: '已建立的TCP连接数（称为<code>CurrEstab</code>）。这是在测量时已建立的连接的快照（就是在同一迭代内建立的连接和断开的连接不会影响该指标）。'
    },

    'ipv4.tcpopens': {
        info: '<b>active</b>或<code>ActiveOpens</code>是此主机尝试的传出TCP<b>连接</b>的数量。'
            + '<b>passive</b>或<code>PassiveOpens</code>是此主机接受的传入TCP<b>连接</b>的数量。'
    },

    'ipv4.tcperrors': {
        info: '<code>InErrs</code>是错误接收的TCP段数（包括头太小、校验和错误、序列错误、坏数据包-对于IPv4和IPv6）。'
            + '  <code>InCsumErrors</code>是接收到的带有校验和错误的TCP段数（对于IPv4和IPv6）。'
            + '  <code>RetransSegs</code>是重新传输的TCP段数。'
    },

    'ipv4.tcphandshake': {
        info: '<code>EstabResets</code>是已建立的连接重置数（即从<code>已建立的连接或<code>关闭等待</code>直接转换为<code>关闭</code>）'
            + ' <code>OutRsts</code>是发送的TCP段数，并设置了<code>RST</code>标志（对于IPv4和IPv6）。'
            + '<code>AttemptFails</code>是TCP连接从<code>SYN_SENT</code>或<code>SYN_RECV</code>直接转换到<code>CLOSED</code>的次数，加上TCP连接从<code>SYN_RECV</code>直接转换到<code>LISTEN</code>的次数。'
            + '  <code>TCPSynRetrans</code>显示新出站TCP连接的重试，这可能指示远程主机上的一般连接问题或积压工作。'
    },

    // ------------------------------------------------------------------------
    // APPS

    'apps.cpu': {
        height: 2.0
    },

    'apps.mem': {
        info: '应用程序分配的虚拟内存。请查看<a href="https://github.com/netdata/netdata/tree/master/daemon#virtual-memory" target="_blank">本文</a> 以获取更多信息。'
    },

    'apps.vmem': {
        info: 'Virtual memory allocated by applications. Please check <a href="https://github.com/netdata/netdata/tree/master/daemon#virtual-memory" target="_blank">this article</a> for more information.'
    },

    'apps.preads': {
        height: 2.0
    },

    'apps.pwrites': {
        height: 2.0
    },

    'apps.uptime': {
        info: '自Netdata重新启动以来，进程组的正常运行时间得以保留。该组中至少有一个进程正在运行的时间段。'
    },

    // ------------------------------------------------------------------------
    // USERS

    'users.cpu': {
        height: 2.0
    },

    'users.mem': {
        info: '每个用户使用的实际内存（RAM）。这不包括共享内存。'
    },

    'users.vmem': {
        info: 'Virtual memory allocated per user. Please check <a href="https://github.com/netdata/netdata/tree/master/daemon#virtual-memory" target="_blank">this article</a> for more information.'
    },

    'users.preads': {
        height: 2.0
    },

    'users.pwrites': {
        height: 2.0
    },

    'users.uptime': {
        info: '自Netdata重新启动以来，进程组的正常运行时间得以保留。该组中至少有一个进程正在运行的时间段。'
    },

    // ------------------------------------------------------------------------
    // GROUPS

    'groups.cpu': {
        height: 2.0
    },

    'groups.mem': {
        info: '每个用户组使用的实内存（RAM）。这不包括共享内存。'
    },

    'groups.vmem': {
        info: 'Virtual memory allocated per user group since the Netdata restart. Please check <a href="https://github.com/netdata/netdata/tree/master/daemon#virtual-memory" target="_blank">this article</a> for more information.'
    },

    'groups.preads': {
        height: 2.0
    },

    'groups.pwrites': {
        height: 2.0
    },

    'groups.uptime': {
        info: '保留了流程组的正常运行时间。该组中至少有一个进程正在运行的时间段。'
    },

    // ------------------------------------------------------------------------
    // NETWORK QoS

    'tc.qos': {
        heads: [
            function (os, id) {
                void (os);

                if (id.match(/.*-ifb$/))
                    return netdataDashboard.gaugeChart('入站', '12%', '', '#5555AA');
                else
                    return netdataDashboard.gaugeChart('出站', '12%', '', '#AA9900');
            }
        ]
    },

    // ------------------------------------------------------------------------
    // NETWORK INTERFACES

    'net.net': {
        mainheads: [
            function (os, id) {
                void (os);
                if (id.match(/^cgroup_.*/)) {
                    var iface;
                    try {
                        iface = ' ' + id.substring(id.lastIndexOf('.net_') + 5, id.length);
                    } catch (e) {
                        iface = '';
                    }
                    return netdataDashboard.gaugeChart('已收到' + iface, '20%', 'received');
                } else
                    return '';
            },
            function (os, id) {
                void (os);
                if (id.match(/^cgroup_.*/)) {
                    var iface;
                    try {
                        iface = ' ' + id.substring(id.lastIndexOf('.net_') + 5, id.length);
                    } catch (e) {
                        iface = '';
                    }
                    return netdataDashboard.gaugeChart('已发送' + iface, '20%', 'sent');
                } else
                    return '';
            }
        ],
        heads: [
            function (os, id) {
                void (os);
                if (!id.match(/^cgroup_.*/))
                    return netdataDashboard.gaugeChart('已收到', '20%', 'received');
                else
                    return '';
            },
            function (os, id) {
                void (os);
                if (!id.match(/^cgroup_.*/))
                    return netdataDashboard.gaugeChart('已发送', '20%', 'sent');
                else
                    return '';
            }
        ]
    },

    // ------------------------------------------------------------------------
    // NETFILTER

    'netfilter.sockets': {
        colors: '#88AA00',
        heads: [
            netdataDashboard.gaugeChart('活动连接', '12%', '', '#88AA00')
        ]
    },

    'netfilter.new': {
        heads: [
            netdataDashboard.gaugeChart('新连接', '12%', 'new', '#5555AA')
        ]
    },

    // ------------------------------------------------------------------------
    // DISKS

    'disk.util': {
        colors: '#FF5588',
        heads: [
            netdataDashboard.gaugeChart('使用率', '22%', '', '#FF5588')
        ],
        info: '磁盘利用率衡量磁盘忙于处理某事的时间，这与其性能无关。100％表示系统始终在磁盘上进行读写的操作。根据磁盘的基础技术，此处100％可能不一定表示拥塞。'
    },

    'disk.backlog': {
        colors: '#0099CC',
        info: 'Backlog表示挂起的磁盘操作的持续时间。在每个I/O事件上，系统将自上次更新此字段以来执行I/O所花费的时间与挂起的操作数相乘。虽然不准确，但这一指标可以提供正在进行的操作的预期完成时间的指示。'
    },

    'disk.io': {
        heads: [
            netdataDashboard.gaugeChart('读取', '22%', 'reads'),
            netdataDashboard.gaugeChart('写入', '22%', 'writes')
        ],
        info: '磁盘传输数据的速度。'
    },

    'disk.ops': {
        info: '已完成的磁盘I/O operations。实际上的operations数量可能更高，因为系统能够将它们互相合并 (详见operations图表)。'
    },

    'disk.qops': {
        info: '目前正在进行I/O操作。此指标是快照不是上一个时间间隔的平均值。'
    },

    'disk.iotime': {
        height: 0.5,
        info: '所有已完成的I/O操作持续时间的总和。如果磁盘能够并行执行I/O操作，则此数目可以超过间隔'
    },
    'disk.mops': {
        height: 0.5,
        info: '合并磁盘操作的数量。该系统能够合并相邻的I/O操作，例如，两个4KB读取可以变成一个8KB读取，然后再分配给磁盘。'
    },
    'disk.svctm': {
        height: 0.5,
        info: '完成的I/O操作的平均服务时间。使用磁盘的总繁忙时间和已完成的操作数来计算该指标。 如果磁盘能够执行多个并行操作，则报告的平均服务时间将产生误导'
    },
    'disk.avgsz': {
        height: 0.5,
        info: 'I/O operation平均大小。'
    },
    'disk.await': {
        height: 0.5,
        info: '对要提供服务的设备发出I/O请求平均时间。这包含了请求在伫列中所花费的时间以及实际提供服务的时间。'
    },

    'disk.space': {
        info: '磁盘空间使用率。系统会自动为root使用者做保留，以防止root使用者使用过多。'
    },
    'disk.inodes': {
        info: '索引节点（或索引节点）是文件系统对象（如文件和目录）。在许多类型的文件系统实现中，索引节点的最大数量在文件系统创建时是固定的，这限制了文件系统可以容纳的最大文件数量。设备可能会耗尽索引节点。发生这种情况时，即使可能有可用空间，也无法在设备上创建新文件'
    },

    'mysql.net': {
        info: 'The amount of data sent to mysql clients (<strong>out</strong>) and received from mysql clients (<strong>in</strong>).'
    },

    // ------------------------------------------------------------------------
    // MYSQL

    'mysql.queries': {
        info: 'The number of statements executed by the server.<ul>' +
            '<li><strong>queries</strong> counts the statements executed within stored SQL programs.</li>' +
            '<li><strong>questions</strong> counts the statements sent to the mysql server by mysql clients.</li>' +
            '<li><strong>slow queries</strong> counts the number of statements that took more than <a href="http://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_long_query_time" target="_blank">long_query_time</a> seconds to be executed.' +
            ' For more information about slow queries check the mysql <a href="http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html" target="_blank">slow query log</a>.</li>' +
            '</ul>'
    },

    'mysql.handlers': {
        info: 'Usage of the internal handlers of mysql. This chart provides very good insights of what the mysql server is actually doing.' +
            ' (if the chart is not showing all these dimensions it is because they are zero - set <strong>Which dimensions to show?</strong> to <strong>All</strong> from the dashboard settings, to render even the zero values)<ul>' +
            '<li><strong>commit</strong>, the number of internal <a href="http://dev.mysql.com/doc/refman/5.7/en/commit.html" target="_blank">COMMIT</a> statements.</li>' +
            '<li><strong>delete</strong>, the number of times that rows have been deleted from tables.</li>' +
            '<li><strong>prepare</strong>, a counter for the prepare phase of two-phase commit operations.</li>' +
            '<li><strong>read first</strong>, the number of times the first entry in an index was read. A high value suggests that the server is doing a lot of full index scans; e.g. <strong>SELECT col1 FROM foo</strong>, with col1 indexed.</li>' +
            '<li><strong>read key</strong>, the number of requests to read a row based on a key. If this value is high, it is a good indication that your tables are properly indexed for your queries.</li>' +
            '<li><strong>read next</strong>, the number of requests to read the next row in key order. This value is incremented if you are querying an index column with a range constraint or if you are doing an index scan.</li>' +
            '<li><strong>read prev</strong>, the number of requests to read the previous row in key order. This read method is mainly used to optimize <strong>ORDER BY ... DESC</strong>.</li>' +
            '<li><strong>read rnd</strong>, the number of requests to read a row based on a fixed position. A high value indicates you are doing a lot of queries that require sorting of the result. You probably have a lot of queries that require MySQL to scan entire tables or you have joins that do not use keys properly.</li>' +
            '<li><strong>read rnd next</strong>, the number of requests to read the next row in the data file. This value is high if you are doing a lot of table scans. Generally this suggests that your tables are not properly indexed or that your queries are not written to take advantage of the indexes you have.</li>' +
            '<li><strong>rollback</strong>, the number of requests for a storage engine to perform a rollback operation.</li>' +
            '<li><strong>savepoint</strong>, the number of requests for a storage engine to place a savepoint.</li>' +
            '<li><strong>savepoint rollback</strong>, the number of requests for a storage engine to roll back to a savepoint.</li>' +
            '<li><strong>update</strong>, the number of requests to update a row in a table.</li>' +
            '<li><strong>write</strong>, the number of requests to insert a row in a table.</li>' +
            '</ul>'
    },

    'mysql.table_locks': {
        info: 'MySQL table locks counters: <ul>' +
            '<li><strong>immediate</strong>, the number of times that a request for a table lock could be granted immediately.</li>' +
            '<li><strong>waited</strong>, the number of times that a request for a table lock could not be granted immediately and a wait was needed. If this is high and you have performance problems, you should first optimize your queries, and then either split your table or tables or use replication.</li>' +
            '</ul>'
    },

    'mysql.innodb_deadlocks': {
        info: 'A deadlock happens when two or more transactions mutually hold and request for locks, creating a cycle of dependencies. For more information about <a href="https://dev.mysql.com/doc/refman/5.7/en/innodb-deadlocks-handling.html" target="_blank">how to minimize and handle deadlocks</a>.'
    },

    'mysql.galera_cluster_status': {
        info:
            '<code>-1</code>: unknown, ' +
            '<code>0</code>: primary (primary group configuration, quorum present), ' +
            '<code>1</code>: non-primary (non-primary group configuration, quorum lost), ' +
            '<code>2</code>: disconnected(not connected to group, retrying).'
    },

    'mysql.galera_cluster_state': {
        info:
            '<code>0</code>: undefined, ' +
            '<code>1</code>: joining, ' +
            '<code>2</code>: donor/desynced, ' +
            '<code>3</code>: joined, ' +
            '<code>4</code>: synced.'
    },

    'mysql.galera_cluster_weight': {
        info: 'The value is counted as a sum of <code>pc.weight</code> of the nodes in the current Primary Component.'
    },

    'mysql.galera_connected': {
        info: '<code>0</code> means that the node has not yet connected to any of the cluster components. ' +
            'This may be due to misconfiguration.'
    },

    'mysql.open_transactions': {
        info: '在wsrep提供程序中已注册的本地运行的事务数。' +
            '这意味着进行了导致写入集填充的操作的事务。 ' +
            '只读的事务不计算在内。'
    },


    // ------------------------------------------------------------------------
    // POSTGRESQL


    'postgres.db_stat_blks': {
        info: 'Blocks reads from disk or cache.<ul>' +
            '<li><strong>blks_read:</strong> number of disk blocks read in this database.</li>' +
            '<li><strong>blks_hit:</strong> number of times disk blocks were found already in the buffer cache, so that a read was not necessary (this only includes hits in the PostgreSQL buffer cache, not the operating system&#39;s file system cache)</li>' +
            '</ul>'
    },
    'postgres.db_stat_tuple_write': {
        info: '<ul><li>Number of rows inserted/updated/deleted.</li>' +
            '<li><strong>conflicts:</strong> number of queries canceled due to conflicts with recovery in this database. (Conflicts occur only on standby servers; see <a href="https://www.postgresql.org/docs/10/static/monitoring-stats.html#PG-STAT-DATABASE-CONFLICTS-VIEW" target="_blank">pg_stat_database_conflicts</a> for details.)</li>' +
            '</ul>'
    },
    'postgres.db_stat_temp_bytes': {
        info: 'Temporary files can be created on disk for sorts, hashes, and temporary query results.'
    },
    'postgres.db_stat_temp_files': {
        info: '<ul>' +
            '<li><strong>files:</strong> number of temporary files created by queries. All temporary files are counted, regardless of why the temporary file was created (e.g., sorting or hashing).</li>' +
            '</ul>'
    },
    'postgres.archive_wal': {
        info: 'WAL archiving.<ul>' +
            '<li><strong>total:</strong> total files.</li>' +
            '<li><strong>ready:</strong> WAL waiting to be archived.</li>' +
            '<li><strong>done:</strong> WAL successfully archived. ' +
            'Ready WAL can indicate archive_command is in error, see <a href="https://www.postgresql.org/docs/current/static/continuous-archiving.html" target="_blank">Continuous Archiving and Point-in-Time Recovery</a>.</li>' +
            '</ul>'
    },
    'postgres.checkpointer': {
        info: 'Number of checkpoints.<ul>' +
            '<li><strong>scheduled:</strong> when checkpoint_timeout is reached.</li>' +
            '<li><strong>requested:</strong> when max_wal_size is reached.</li>' +
            '</ul>' +
            'For more information see <a href="https://www.postgresql.org/docs/current/static/wal-configuration.html" target="_blank">WAL Configuration</a>.'
    },
    'postgres.autovacuum': {
        info: 'PostgreSQL databases require periodic maintenance known as vacuuming. For many installations, it is sufficient to let vacuuming be performed by the autovacuum daemon. ' +
            'For more information see <a href="https://www.postgresql.org/docs/current/static/routine-vacuuming.html#AUTOVACUUM" target="_blank">The Autovacuum Daemon</a>.'
    },
    'postgres.standby_delta': {
        info: 'Streaming replication delta.<ul>' +
            '<li><strong>sent_delta:</strong> replication delta sent to standby.</li>' +
            '<li><strong>write_delta:</strong> replication delta written to disk by this standby.</li>' +
            '<li><strong>flush_delta:</strong> replication delta flushed to disk by this standby server.</li>' +
            '<li><strong>replay_delta:</strong> replication delta replayed into the database on this standby server.</li>' +
            '</ul>' +
            'For more information see <a href="https://www.postgresql.org/docs/current/static/warm-standby.html#SYNCHRONOUS-REPLICATION" target="_blank">Synchronous Replication</a>.'
    },
    'postgres.replication_slot': {
        info: 'Replication slot files.<ul>' +
            '<li><strong>wal_keeped:</strong> WAL files retained by each replication slots.</li>' +
            '<li><strong>pg_replslot_files:</strong> files present in pg_replslot.</li>' +
            '</ul>' +
            'For more information see <a href="https://www.postgresql.org/docs/current/static/warm-standby.html#STREAMING-REPLICATION-SLOTS" target="_blank">Replication Slots</a>.'
    },
    'postgres.backend_usage': {
        info: 'Connections usage against maximum connections allowed, as defined in the <i>max_connections</i> setting.<ul>' +
            '<li><strong>available:</strong> maximum new connections allowed.</li>' +
            '<li><strong>used:</strong> connections currently in use.</li>' +
            '</ul>' +
            'Assuming non-superuser accounts are being used to connect to Postgres (so <i>superuser_reserved_connections</i> are subtracted from <i>max_connections</i>).<br/>' +
            'For more information see <a href="https://www.postgresql.org/docs/current/runtime-config-connection.html" target="_blank">Connections and Authentication</a>.'
    },


    // ------------------------------------------------------------------------
    // APACHE

    'apache.connections': {
        colors: NETDATA.colors[4],
        mainheads: [
            netdataDashboard.gaugeChart('连接数', '12%', '', NETDATA.colors[4])
        ]
    },

    'apache.requests': {
        colors: NETDATA.colors[0],
        mainheads: [
            netdataDashboard.gaugeChart('要求', '12%', '', NETDATA.colors[0])
        ]
    },

    'apache.net': {
        colors: NETDATA.colors[3],
        mainheads: [
            netdataDashboard.gaugeChart('带宽', '12%', '', NETDATA.colors[3])
        ]
    },

    'apache.workers': {
        mainheads: [
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="busy"'
                    + ' data-append-options="percentage"'
                    + ' data-gauge-max-value="100"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="Workers Utilization"'
                    + ' data-units="percentage %"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' role="application"></div>';
            }
        ]
    },

    'apache.bytesperreq': {
        colors: NETDATA.colors[3],
        height: 0.5
    },

    'apache.reqpersec': {
        colors: NETDATA.colors[4],
        height: 0.5
    },

    'apache.bytespersec': {
        colors: NETDATA.colors[6],
        height: 0.5
    },


    // ------------------------------------------------------------------------
    // LIGHTTPD

    'lighttpd.connections': {
        colors: NETDATA.colors[4],
        mainheads: [
            netdataDashboard.gaugeChart('连接数', '12%', '', NETDATA.colors[4])
        ]
    },

    'lighttpd.requests': {
        colors: NETDATA.colors[0],
        mainheads: [
            netdataDashboard.gaugeChart('要求', '12%', '', NETDATA.colors[0])
        ]
    },

    'lighttpd.net': {
        colors: NETDATA.colors[3],
        mainheads: [
            netdataDashboard.gaugeChart('带宽', '12%', '', NETDATA.colors[3])
        ]
    },

    'lighttpd.workers': {
        mainheads: [
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="busy"'
                    + ' data-append-options="percentage"'
                    + ' data-gauge-max-value="100"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="服务器利用率"'
                    + ' data-units="percentage %"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' role="application"></div>';
            }
        ]
    },

    'lighttpd.bytesperreq': {
        colors: NETDATA.colors[3],
        height: 0.5
    },

    'lighttpd.reqpersec': {
        colors: NETDATA.colors[4],
        height: 0.5
    },

    'lighttpd.bytespersec': {
        colors: NETDATA.colors[6],
        height: 0.5
    },

    // ------------------------------------------------------------------------
    // NGINX

    'nginx.connections': {
        colors: NETDATA.colors[4],
        mainheads: [
            netdataDashboard.gaugeChart('连接数', '12%', '', NETDATA.colors[4])
        ]
    },

    'nginx.requests': {
        colors: NETDATA.colors[0],
        mainheads: [
            netdataDashboard.gaugeChart('要求', '12%', '', NETDATA.colors[0])
        ]
    },

    // ------------------------------------------------------------------------
    // HTTP check

    'httpcheck.responsetime': {
        info: '<code>响应时间</code>描述了请求和响应之间经过的时间。 ' +
            '当前的响应时间的准确性较低，仅应作为参考。'
    },

    'httpcheck.responselength': {
        info: '<code>响应长度</code>计算响应正文中的字符数。对于静态页面应该基本保持不变。'
    },

    'httpcheck.status': {
        valueRange: "[0, 1]",
        info: '此图表验证了Web服务器的响应。如果触发，每个状态维度的值将为<code>1</code>。 ' +
            '只有满足所有约束时，维度<code>成功</code>才是<code>1</code>的。 ' +
            '此图表对于警报或第三方应用程序最有用。'
    },

    // ------------------------------------------------------------------------
    // NETDATA

    'netdata.response_time': {
        info: 'netdata API响应时间用于衡量服务请求所需的netdata时间。 这段时间包括从接收请求的第一个字节到发送其答复的最后一个字节的所有内容，因此它包括所有涉及的网络延迟（就是网络速度较慢的客户端会影响这些指标）。'
    },

    // ------------------------------------------------------------------------
    // RETROSHARE

    'retroshare.bandwidth': {
        info: 'RetroShare inbound and outbound traffic.',
        mainheads: [
            netdataDashboard.gaugeChart('已收到', '12%', 'bandwidth_down_kb'),
            netdataDashboard.gaugeChart('已发送', '12%', 'bandwidth_up_kb')
        ]
    },

    'retroshare.peers': {
        info: 'Number of (connected) RetroShare friends.',
        mainheads: [
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="peers_connected"'
                    + ' data-append-options="friends"'
                    + ' data-chart-library="easypiechart"'
                    + ' data-title="connected friends"'
                    + ' data-units=""'
                    + ' data-width="8%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' role="application"></div>';
            }
        ]
    },

    'retroshare.dht': {
        info: '关于RetroShare的DHT的统计数据。这些值是估计的！'
    },

    // ------------------------------------------------------------------------
    // fping

    'fping.quality': {
        colors: NETDATA.colors[10],
        height: 0.5
    },

    'fping.packets': {
        height: 0.5
    },


    // ------------------------------------------------------------------------
    // containers

    'cgroup.cpu_limit': {
        valueRange: "[0, null]",
        mainheads: [
            function (os, id) {
                void (os);
                cgroupCPULimitIsSet = 1;
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="used"'
                    + ' data-gauge-max-value="100"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="CPU"'
                    + ' data-units="%"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[4] + '"'
                    + ' role="application"></div>';
            }
        ]
    },

    'cgroup.cpu': {
        mainheads: [
            function (os, id) {
                void (os);
                if (cgroupCPULimitIsSet === 0) {
                    return '<div data-netdata="' + id + '"'
                        + ' data-chart-library="gauge"'
                        + ' data-title="CPU"'
                        + ' data-units="%"'
                        + ' data-gauge-adjust="width"'
                        + ' data-width="12%"'
                        + ' data-before="0"'
                        + ' data-after="-CHART_DURATION"'
                        + ' data-points="CHART_DURATION"'
                        + ' data-colors="' + NETDATA.colors[4] + '"'
                        + ' role="application"></div>';
                } else
                    return '';
            }
        ]
    },

    'cgroup.mem_usage_limit': {
        mainheads: [
            function (os, id) {
                void (os);
                cgroupMemLimitIsSet = 1;
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="used"'
                    + ' data-append-options="percentage"'
                    + ' data-gauge-max-value="100"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="内存"'
                    + ' data-units="%"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[1] + '"'
                    + ' role="application"></div>';
            }
        ]
    },

    'cgroup.mem_usage': {
        mainheads: [
            function (os, id) {
                void (os);
                if (cgroupMemLimitIsSet === 0) {
                    return '<div data-netdata="' + id + '"'
                        + ' data-chart-library="gauge"'
                        + ' data-title="内存"'
                        + ' data-units="MB"'
                        + ' data-gauge-adjust="width"'
                        + ' data-width="12%"'
                        + ' data-before="0"'
                        + ' data-after="-CHART_DURATION"'
                        + ' data-points="CHART_DURATION"'
                        + ' data-colors="' + NETDATA.colors[1] + '"'
                        + ' role="application"></div>';
                } else
                    return '';
            }
        ]
    },

    'cgroup.throttle_io': {
        mainheads: [
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="read"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="磁盘读取I/O"'
                    + ' data-units="KB/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[2] + '"'
                    + ' role="application"></div>';
            },
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="write"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="磁盘写入I/O"'
                    + ' data-units="KB/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[3] + '"'
                    + ' role="application"></div>';
            }
        ]
    },

    // ------------------------------------------------------------------------
    // beanstalkd
    // system charts
    'beanstalk.cpu_usage': {
        info: 'beantalkd使用的用户和系统的CPU时间量。'
    },

    // This is also a per-tube stat
    'beanstalk.jobs_rate': {
        info: '空闲处理的工作率。'
    },

    'beanstalk.connections_rate': {
        info: '对beantalk敞开的连接速率。'
    },

    'beanstalk.commands_rate': {
        info: 'beantalkd接收到的命令的速率。'
    },

    'beanstalk.current_tubes': {
        info: '服务器上当前管道的总数，包括默认管道（始终存在）。'
    },

    'beanstalk.current_jobs': {
        info: '按状态分组的所有管道中的当前作业数：紧急、就绪、保留、延迟和隐藏。'
    },

    'beanstalk.current_connections': {
        info: '当前连接数按连接类型分组：书面的，生产者的，工人的，等待的。'
    },

    'beanstalk.binlog': {
        info: '作为压缩的一部分，将记录<code>写入</code>到二进制记录和<code>迁移</code>的记录的速率。'
    },

    'beanstalk.uptime': {
        info: 'beantalkd服务器的总时间已到。'
    },

    // tube charts
    'beanstalk.jobs': {
        info: 'Number of jobs currently in the tube grouped by status: urgent, ready, reserved, delayed and buried.'
    },

    'beanstalk.connections': {
        info: '按连接类型分组的到此管的当前连接数；使用、等待和监视。'
    },

    'beanstalk.commands': {
        info: 'beanstalk执行的<code>删除</code>和<code>暂停</code>命令的速率。'
    },

    'beanstalk.pause': {
        info: '显示有关暂停时间的信息，以及暂停时间还剩多长。'
    },

    // ------------------------------------------------------------------------
    // ceph

    'ceph.general_usage': {
        info: '所有ceph集群中的使用情况和可用空间。'
    },

    'ceph.general_objects': {
        info: 'ceph集群上存储的对象总数。'
    },

    'ceph.general_bytes': {
        info: 'Cluster read and write data per second.'
    },

    'ceph.general_operations': {
        info: 'Number of read and write operations per second.'
    },

    'ceph.general_latency': {
        info: '所有OSD中的应用和提交延迟总计。应用延迟是将更新刷新到磁盘所花费的总时间。 提交延迟是将操作提交到日志所花费的总时间。'
    },

    'ceph.pool_usage': {
        info: 'The usage space in each pool.'
    },

    'ceph.pool_objects': {
        info: '每个池中存在的对象数。'
    },

    'ceph.pool_read_bytes': {
        info: '每个池中每秒读取数据的速率。'
    },

    'ceph.pool_write_bytes': {
        info: '每个池中每秒写入数据的速率。'
    },

    'ceph.pool_read_objects': {
        info: '每个池中每秒读取的对象数。'
    },

    'ceph.pool_write_objects': {
        info: '每个池中每秒写入对象的数目。'
    },

    'ceph.osd_usage': {
        info: 'The usage space in each OSD.'
    },

    'ceph.apply_latency': {
        info: 'Time taken to flush an update in each OSD.'
    },

    'ceph.commit_latency': {
        info: 'Time taken to commit an operation to the journal in each OSD.'
    },

    // ------------------------------------------------------------------------
    // web_log

    'web_log.response_statuses': {
        info: 'Web server responses by type. <code>success</code> includes <b>1xx</b>, <b>2xx</b>, <b>304</b> and <b>401</b>, <code>error</code> includes <b>5xx</b>, <code>redirect</code> includes <b>3xx</b> except <b>304</b>, <code>bad</code> includes <b>4xx</b> except <b>401</b>, <code>other</code> are all the other responses.',
        mainheads: [
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="success"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="Successful"'
                    + ' data-units="requests/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-common-max="' + id + '"'
                    + ' data-colors="' + NETDATA.colors[0] + '"'
                    + ' data-decimal-digits="0"'
                    + ' role="application"></div>';
            },

            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="redirect"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="重定向"'
                    + ' data-units="requests/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-common-max="' + id + '"'
                    + ' data-colors="' + NETDATA.colors[2] + '"'
                    + ' data-decimal-digits="0"'
                    + ' role="application"></div>';
            },

            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="bad"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="错误的请求"'
                    + ' data-units="requests/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-common-max="' + id + '"'
                    + ' data-colors="' + NETDATA.colors[3] + '"'
                    + ' data-decimal-digits="0"'
                    + ' role="application"></div>';
            },

            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="error"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="服务器错误"'
                    + ' data-units="requests/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-common-max="' + id + '"'
                    + ' data-colors="' + NETDATA.colors[1] + '"'
                    + ' data-decimal-digits="0"'
                    + ' role="application"></div>';
            }
        ]
    },

    'web_log.response_codes': {
        info: 'Web server responses by code family. ' +
            'According to the standards <code>1xx</code> are informational responses, ' +
            '<code>2xx</code> are successful responses, ' +
            '<code>3xx</code> are redirects (although they include <b>304</b> which is used as "<b>not modified</b>"), ' +
            '<code>4xx</code> are bad requests, ' +
            '<code>5xx</code> are internal server errors, ' +
            '<code>other</code> are non-standard responses, ' +
            '<code>unmatched</code> counts the lines in the log file that are not matched by the plugin (<a href="https://github.com/netdata/netdata/issues/new?title=web_log%20reports%20unmatched%20lines&body=web_log%20plugin%20reports%20unmatched%20lines.%0A%0AThis%20is%20my%20log:%0A%0A%60%60%60txt%0A%0Aplease%20paste%20your%20web%20server%20log%20here%0A%0A%60%60%60" target="_blank">let us know</a> if you have any unmatched).'
    },

    'web_log.response_time': {
        mainheads: [
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="avg"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="平均响应时间"'
                    + ' data-units="milliseconds"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[4] + '"'
                    + ' data-decimal-digits="2"'
                    + ' role="application"></div>';
            }
        ]
    },

    'web_log.detailed_response_codes': {
        info: '每个响应代码的响应数。'
    },

    'web_log.requests_per_ipproto': {
        info: '每个IP协议版本接收的Web服务器请求数。'
    },

    'web_log.clients': {
        info: '在每次数据收集迭代中，访问Web服务器的唯一客户端IP。如果数据收集是<b>每秒</b>，则此图表显示<b>每秒唯一的客户端IP </b>。'
    },

    'web_log.clients_all': {
        info: 'Unique client IPs accessing the web server since the last restart of netdata. This plugin keeps in memory all the unique IPs that have accessed the web server. On very busy web servers (several millions of unique IPs) you may want to disable this chart (check <a href="https://github.com/netdata/netdata/blob/master/collectors/python.d.plugin/web_log/web_log.conf" target="_blank"><code>/etc/netdata/python.d/web_log.conf</code></a>).'
    },

    // ------------------------------------------------------------------------
    // web_log for squid

    'web_log.squid_response_statuses': {
        info: 'Squid responses by type. ' +
            '<code>success</code> includes <b>1xx</b>, <b>2xx</b>, <b>000</b>, <b>304</b>, ' +
            '<code>error</code> includes <b>5xx</b> and <b>6xx</b>, ' +
            '<code>redirect</code> includes <b>3xx</b> except <b>304</b>, ' +
            '<code>bad</code> includes <b>4xx</b>, ' +
            '<code>other</code> are all the other responses.',
        mainheads: [
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="success"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="Successful"'
                    + ' data-units="requests/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-common-max="' + id + '"'
                    + ' data-colors="' + NETDATA.colors[0] + '"'
                    + ' data-decimal-digits="0"'
                    + ' role="application"></div>';
            },

            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="redirect"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="Redirects"'
                    + ' data-units="requests/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-common-max="' + id + '"'
                    + ' data-colors="' + NETDATA.colors[2] + '"'
                    + ' data-decimal-digits="0"'
                    + ' role="application"></div>';
            },

            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="bad"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="错误的要求"'
                    + ' data-units="requests/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-common-max="' + id + '"'
                    + ' data-colors="' + NETDATA.colors[3] + '"'
                    + ' data-decimal-digits="0"'
                    + ' role="application"></div>';
            },

            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="error"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="Server Errors"'
                    + ' data-units="requests/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-common-max="' + id + '"'
                    + ' data-colors="' + NETDATA.colors[1] + '"'
                    + ' data-decimal-digits="0"'
                    + ' role="application"></div>';
            }
        ]
    },

    'web_log.squid_response_codes': {
        info: 'Web server responses by code family. ' +
            'According to HTTP standards <code>1xx</code> are informational responses, ' +
            '<code>2xx</code> are successful responses, ' +
            '<code>3xx</code> are redirects (although they include <b>304</b> which is used as "<b>not modified</b>"), ' +
            '<code>4xx</code> are bad requests, ' +
            '<code>5xx</code> are internal server errors. ' +
            'Squid also defines <code>000</code> mostly for UDP requests, and ' +
            '<code>6xx</code> for broken upstream servers sending wrong headers. ' +
            'Finally, <code>other</code> are non-standard responses, and ' +
            '<code>unmatched</code> counts the lines in the log file that are not matched by the plugin (<a href="https://github.com/netdata/netdata/issues/new?title=web_log%20reports%20unmatched%20lines&body=web_log%20plugin%20reports%20unmatched%20lines.%0A%0AThis%20is%20my%20log:%0A%0A%60%60%60txt%0A%0Aplease%20paste%20your%20web%20server%20log%20here%0A%0A%60%60%60" target="_blank">let us know</a> if you have any unmatched).'
    },

    'web_log.squid_duration': {
        mainheads: [
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="avg"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="平均响应时间"'
                    + ' data-units="milliseconds"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[4] + '"'
                    + ' data-decimal-digits="2"'
                    + ' role="application"></div>';
            }
        ]
    },

    'web_log.squid_detailed_response_codes': {
        info: '每个响应代码的响应数。'
    },

    'web_log.squid_clients': {
        info: 'Unique client IPs accessing squid, within each data collection iteration. If data collection is <b>per second</b>, this chart shows <b>unique client IPs per second</b>.'
    },

    'web_log.squid_clients_all': {
        info: 'Unique client IPs accessing squid since the last restart of netdata. This plugin keeps in memory all the unique IPs that have accessed the server. On very busy squid servers (several millions of unique IPs) you may want to disable this chart (check <a href="https://github.com/netdata/netdata/blob/master/collectors/python.d.plugin/web_log/web_log.conf" target="_blank"><code>/etc/netdata/python.d/web_log.conf</code></a>).'
    },

    'web_log.squid_transport_methods': {
        info: 'Break down per delivery method: <code>TCP</code> are requests on the HTTP port (usually 3128), ' +
            '<code>UDP</code> are requests on the ICP port (usually 3130), or HTCP port (usually 4128). ' +
            'If ICP logging was disabled using the log_icp_queries option, no ICP replies will be logged. ' +
            '<code>NONE</code> are used to state that squid delivered an unusual response or no response at all. ' +
            'Seen with cachemgr requests and errors, usually when the transaction fails before being classified into one of the above outcomes. ' +
            'Also seen with responses to <code>CONNECT</code> requests.'
    },

    'web_log.squid_code': {
        info: 'These are combined squid result status codes. A break down per component is given in the following charts. ' +
            'Check the <a href="http://wiki.squid-cache.org/SquidFaq/SquidLogs">squid documentation about them</a>.'
    },

    'web_log.squid_handling_opts': {
        info: 'These tags are optional and describe why the particular handling was performed or where the request came from. ' +
            '<code>CLIENT</code> means that the client request placed limits affecting the response. Usually seen with client issued a <b>no-cache</b>, or analogous cache control command along with the request. Thus, the cache has to validate the object.' +
            '<code>IMS</code> states that the client sent a revalidation (conditional) request. ' +
            '<code>ASYNC</code>, is used when the request was generated internally by Squid. Usually this is background fetches for cache information exchanges, background revalidation from stale-while-revalidate cache controls, or ESI sub-objects being loaded. ' +
            '<code>SWAPFAIL</code> is assigned when the object was believed to be in the cache, but could not be accessed. A new copy was requested from the server. ' +
            '<code>REFRESH</code> when a revalidation (conditional) request was sent to the server. ' +
            '<code>SHARED</code> when this request was combined with an existing transaction by collapsed forwarding. NOTE: the existing request is not marked as SHARED. ' +
            '<code>REPLY</code> when particular handling was requested in the HTTP reply from server or peer. Usually seen on DENIED due to http_reply_access ACLs preventing delivery of servers response object to the client.'
    },

    'web_log.squid_object_types': {
        info: 'These tags are optional and describe what type of object was produced. ' +
            '<code>NEGATIVE</code> is only seen on HIT responses, indicating the response was a cached error response. e.g. <b>404 not found</b>. ' +
            '<code>STALE</code> means the object was cached and served stale. This is usually caused by stale-while-revalidate or stale-if-error cache controls. ' +
            '<code>OFFLINE</code> when the requested object was retrieved from the cache during offline_mode. The offline mode never validates any object. ' +
            '<code>INVALID</code> when an invalid request was received. An error response was delivered indicating what the problem was. ' +
            '<code>FAIL</code> is only seen on <code>REFRESH</code> to indicate the revalidation request failed. The response object may be the server provided network error or the stale object which was being revalidated depending on stale-if-error cache control. ' +
            '<code>MODIFIED</code> is only seen on <code>REFRESH</code> responses to indicate revalidation produced a new modified object. ' +
            '<code>UNMODIFIED</code> is only seen on <code>REFRESH</code> responses to indicate revalidation produced a <b>304</b> (Not Modified) status, which was relayed to the client. ' +
            '<code>REDIRECT</code> when squid generated an HTTP redirect response to this request.'
    },

    'web_log.squid_cache_events': {
        info: 'These tags are optional and describe whether the response was loaded from cache, network, or otherwise. ' +
            '<code>HIT</code> when the response object delivered was the local cache object. ' +
            '<code>MEM</code> when the response object came from memory cache, avoiding disk accesses. Only seen on HIT responses. ' +
            '<code>MISS</code> when the response object delivered was the network response object. ' +
            '<code>DENIED</code> when the request was denied by access controls. ' +
            '<code>NOFETCH</code> an ICP specific type, indicating service is alive, but not to be used for this request (sent during "-Y" startup, or during frequent failures, a cache in hit only mode will return either UDP_HIT or UDP_MISS_NOFETCH. Neighbours will thus only fetch hits). ' +
            '<code>TUNNEL</code> when a binary tunnel was established for this transaction.'
    },

    'web_log.squid_transport_errors': {
        info: 'These tags are optional and describe some error conditions which occured during response delivery (if any). ' +
            '<code>ABORTED</code> when the response was not completed due to the connection being aborted (usually by the client). ' +
            '<code>TIMEOUT</code>, when the response was not completed due to a connection timeout.'
    },

    // ------------------------------------------------------------------------
    // Fronius Solar Power

    'fronius.power': {
        info: 'Positive <code>Grid</code> values mean that power is coming from the grid. Negative values are excess power that is going back into the grid, possibly selling it. ' +
            '<code>Photovoltaics</code> is the power generated from the solar panels. ' +
            '<code>Accumulator</code> is the stored power in the accumulator, if one is present.'
    },

    'fronius.autonomy': {
        commonMin: true,
        commonMax: true,
        valueRange: "[0, 100]",
        info: 'The <code>Autonomy</code> is the percentage of how autonomous the installation is. An autonomy of 100 % means that the installation is producing more energy than it is needed. ' +
            'The <code>Self consumption</code> indicates the ratio between the current power generated and the current load. When it reaches 100 %, the <code>Autonomy</code> declines, since the solar panels can not produce enough energy and need support from the grid.'
    },

    'fronius.energy.today': {
        commonMin: true,
        commonMax: true,
        valueRange: "[0, null]"
    },

    // ------------------------------------------------------------------------
    // Stiebel Eltron Heat pump installation

    'stiebeleltron.system.roomtemp': {
        commonMin: true,
        commonMax: true,
        valueRange: "[0, null]"
    },

    // ------------------------------------------------------------------------
    // Port check

    'portcheck.latency': {
        info: 'The <code>latency</code> describes the time spent connecting to a TCP port. No data is sent or received. ' +
            'Currently, the accuracy of the latency is low and should be used as reference only.'
    },

    'portcheck.status': {
        valueRange: "[0, 1]",
        info: 'The <code>status</code> chart verifies the availability of the service. ' +
            'Each status dimension will have a value of <code>1</code> if triggered. Dimension <code>success</code> is <code>1</code> only if connection could be established. ' +
            'This chart is most useful for alarms and third-party apps.'
    },

    // ------------------------------------------------------------------------

    'chrony.system': {
        info: 'In normal operation, chronyd never steps the system clock, because any jump in the timescale can have adverse consequences for certain application programs. Instead, any error in the system clock is corrected by slightly speeding up or slowing down the system clock until the error has been removed, and then returning to the system clock’s normal speed. A consequence of this is that there will be a period when the system clock (as read by other programs using the <code>gettimeofday()</code> system call, or by the <code>date</code> command in the shell) will be different from chronyd\'s estimate of the current true time (which it reports to NTP clients when it is operating in server mode). The value reported on this line is the difference due to this effect.',
        colors: NETDATA.colors[3]
    },

    'chrony.offsets': {
        info: '<code>last offset</code> is the estimated local offset on the last clock update. <code>RMS offset</code> is a long-term average of the offset value.',
        height: 0.5
    },

    'chrony.stratum': {
        info: 'The <code>stratum</code> indicates how many hops away from a computer with an attached reference clock we are. Such a computer is a stratum-1 computer.',
        decimalDigits: 0,
        height: 0.5
    },

    'chrony.root': {
        info: 'Estimated delays against the root time server this system is synchronized with. <code>delay</code> is the total of the network path delays to the stratum-1 computer from which the computer is ultimately synchronised. <code>dispersion</code> is the total dispersion accumulated through all the computers back to the stratum-1 computer from which the computer is ultimately synchronised. Dispersion is due to system clock resolution, statistical measurement variations etc.'
    },

    'chrony.frequency': {
        info: 'The <code>frequency</code> is the rate by which the system\'s clock would be would be wrong if chronyd was not correcting it. It is expressed in ppm (parts per million). For example, a value of 1ppm would mean that when the system\'s clock thinks it has advanced 1 second, it has actually advanced by 1.000001 seconds relative to true time.',
        colors: NETDATA.colors[0]
    },

    'chrony.residualfreq': {
        info: 'This shows the <code>residual frequency</code> for the currently selected reference source. ' +
            'It reflects any difference between what the measurements from the reference source indicate the ' +
            'frequency should be and the frequency currently being used. The reason this is not always zero is ' +
            'that a smoothing procedure is applied to the frequency. Each time a measurement from the reference ' +
            'source is obtained and a new residual frequency computed, the estimated accuracy of this residual ' +
            'is compared with the estimated accuracy (see <code>skew</code>) of the existing frequency value. ' +
            'A weighted average is computed for the new frequency, with weights depending on these accuracies. ' +
            'If the measurements from the reference source follow a consistent trend, the residual will be ' +
            'driven to zero over time.',
        height: 0.5,
        colors: NETDATA.colors[3]
    },

    'chrony.skew': {
        info: 'The estimated error bound on the frequency.',
        height: 0.5,
        colors: NETDATA.colors[5]
    },

    'couchdb.active_tasks': {
        info: 'Active tasks running on this CouchDB <b>cluster</b>. Four types of tasks currently exist: indexer (view building), replication, database compaction and view compaction.'
    },

    'couchdb.replicator_jobs': {
        info: 'Detailed breakdown of any replication jobs in progress on this node. For more information, see the <a href="http://docs.couchdb.org/en/latest/replication/replicator.html">replicator documentation</a>.'
    },

    'couchdb.open_files': {
        info: 'Count of all files held open by CouchDB. If this value seems pegged at 1024 or 4096, your server process is probably hitting the open file handle limit and <a href="http://docs.couchdb.org/en/latest/maintenance/performance.html#pam-and-ulimit">needs to be increased.</a>'
    },

    'btrfs.disk': {
        info: 'Physical disk usage of BTRFS. The disk space reported here is the raw physical disk space assigned to the BTRFS volume (i.e. <b>before any RAID levels</b>). BTRFS uses a two-stage allocator, first allocating large regions of disk space for one type of block (data, metadata, or system), and then using a regular block allocator inside those regions. <code>unallocated</code> is the physical disk space that is not allocated yet and is available to become data, metdata or system on demand. When <code>unallocated</code> is zero, all available disk space has been allocated to a specific function. Healthy volumes should ideally have at least five percent of their total space <code>unallocated</code>. You can keep your volume healthy by running the <code>btrfs balance</code> command on it regularly (check <code>man btrfs-balance</code> for more info).  Note that some of the space listed as <code>unallocated</code> may not actually be usable if the volume uses devices of different sizes.',
        colors: [NETDATA.colors[12]]
    },

    'btrfs.data': {
        info: 'Logical disk usage for BTRFS data. Data chunks are used to store the actual file data (file contents). The disk space reported here is the usable allocation (i.e. after any striping or replication). Healthy volumes should ideally have no more than a few GB of free space reported here persistently. Running <code>btrfs balance</code> can help here.'
    },

    'btrfs.metadata': {
        info: 'Logical disk usage for BTRFS metadata. Metadata chunks store most of the filesystem interal structures, as well as information like directory structure and file names. The disk space reported here is the usable allocation (i.e. after any striping or replication). Healthy volumes should ideally have no more than a few GB of free space reported here persistently. Running <code>btrfs balance</code> can help here.'
    },

    'btrfs.system': {
        info: 'Logical disk usage for BTRFS system. System chunks store information about the allocation of other chunks. The disk space reported here is the usable allocation (i.e. after any striping or replication). The values reported here should be relatively small compared to Data and Metadata, and will scale with the volume size and overall space usage.'
    },

    // ------------------------------------------------------------------------
    // RabbitMQ

    // info: the text above the charts
    // heads: the representation of the chart at the top the subsection (second level menu)
    // mainheads: the representation of the chart at the top of the section (first level menu)
    // colors: the dimension colors of the chart (the default colors are appended)
    // height: the ratio of the chart height relative to the default

    'rabbitmq.queued_messages': {
        info: 'Overall total of ready and unacknowledged queued messages.  Messages that are delivered immediately are not counted here.'
    },

    'rabbitmq.message_rates': {
        info: 'Overall messaging rates including acknowledgements, delieveries, redeliveries, and publishes.'
    },

    'rabbitmq.global_counts': {
        info: 'Overall totals for channels, consumers, connections, queues and exchanges.'
    },

    'rabbitmq.file_descriptors': {
        info: 'Total number of used filed descriptors. See <code><a href="https://www.rabbitmq.com/production-checklist.html#resource-limits-file-handle-limit" target="_blank">Open File Limits</a></code> for further details.',
        colors: NETDATA.colors[3]
    },

    'rabbitmq.sockets': {
        info: 'Total number of used socket descriptors.  Each used socket also counts as a used file descriptor.  See <code><a href="https://www.rabbitmq.com/production-checklist.html#resource-limits-file-handle-limit" target="_blank">Open File Limits</a></code> for further details.',
        colors: NETDATA.colors[3]
    },

    'rabbitmq.processes': {
        info: 'Total number of processes running within the Erlang VM.  This is not the same as the number of processes running on the host.',
        colors: NETDATA.colors[3]
    },

    'rabbitmq.erlang_run_queue': {
        info: 'Number of Erlang processes the Erlang schedulers have queued to run.',
        colors: NETDATA.colors[3]
    },

    'rabbitmq.memory': {
        info: 'Total amount of memory used by the RabbitMQ.  This is a complex statistic that can be further analyzed in the management UI.  See <code><a href="https://www.rabbitmq.com/production-checklist.html#resource-limits-ram" target="_blank">Memory</a></code> for further details.',
        colors: NETDATA.colors[3]
    },

    'rabbitmq.disk_space': {
        info: 'Total amount of disk space consumed by the message store(s).  See <code><a href="https://www.rabbitmq.com/production-checklist.html#resource-limits-disk-space" target=_"blank">Disk Space Limits</a></code> for further details.',
        colors: NETDATA.colors[3]
    },

    // ------------------------------------------------------------------------
    // ntpd

    'ntpd.sys_offset': {
        info: 'For hosts without any time critical services an offset of &lt; 100 ms should be acceptable even with high network latencies. For hosts with time critical services an offset of about 0.01 ms or less can be achieved by using peers with low delays and configuring optimal <b>poll exponent</b> values.',
        colors: NETDATA.colors[4]
    },

    'ntpd.sys_jitter': {
        info: 'The jitter statistics are exponentially-weighted RMS averages. The system jitter is defined in the NTPv4 specification; the clock jitter statistic is computed by the clock discipline module.'
    },

    'ntpd.sys_frequency': {
        info: 'The frequency offset is shown in ppm (parts per million) relative to the frequency of the system. The frequency correction needed for the clock can vary significantly between boots and also due to external influences like temperature or radiation.',
        colors: NETDATA.colors[2],
        height: 0.6
    },

    'ntpd.sys_wander': {
        info: 'The wander statistics are exponentially-weighted RMS averages.',
        colors: NETDATA.colors[3],
        height: 0.6
    },

    'ntpd.sys_rootdelay': {
        info: 'The rootdelay is the round-trip delay to the primary reference clock, similar to the delay shown by the <code>ping</code> command. A lower delay should result in a lower clock offset.',
        colors: NETDATA.colors[1]
    },

    'ntpd.sys_stratum': {
        info: 'The distance in "hops" to the primary reference clock',
        colors: NETDATA.colors[5],
        height: 0.3
    },

    'ntpd.sys_tc': {
        info: 'Time constants and poll intervals are expressed as exponents of 2. The default poll exponent of 6 corresponds to a poll interval of 64 s. For typical Internet paths, the optimum poll interval is about 64 s. For fast LANs with modern computers, a poll exponent of 4 (16 s) is appropriate. The <a href="http://doc.ntp.org/current-stable/poll.html">poll process</a> sends NTP packets at intervals determined by the clock discipline algorithm.',
        height: 0.5
    },

    'ntpd.sys_precision': {
        colors: NETDATA.colors[6],
        height: 0.2
    },

    'ntpd.peer_offset': {
        info: 'The offset of the peer clock relative to the system clock in milliseconds. Smaller values here weight peers more heavily for selection after the initial synchronization of the local clock. For a system providing time service to other systems, these should be as low as possible.'
    },

    'ntpd.peer_delay': {
        info: 'The round-trip time (RTT) for communication with the peer, similar to the delay shown by the <code>ping</code> command. Not as critical as either the offset or jitter, but still factored into the selection algorithm (because as a general rule, lower delay means more accurate time). In most cases, it should be below 100ms.'
    },

    'ntpd.peer_dispersion': {
        info: 'This is a measure of the estimated error between the peer and the local system. Lower values here are better.'
    },

    'ntpd.peer_jitter': {
        info: 'This is essentially a remote estimate of the peer\'s <code>system_jitter</code> value. Lower values here weight highly in favor of peer selection, and this is a good indicator of overall quality of a given time server (good servers will have values not exceeding single digit milliseconds here, with high quality stratum one servers regularly having sub-millisecond jitter).'
    },

    'ntpd.peer_xleave': {
        info: 'This variable is used in interleaved mode (used only in NTP symmetric and broadcast modes). See <a href="http://doc.ntp.org/current-stable/xleave.html">NTP Interleaved Modes</a>.'
    },

    'ntpd.peer_rootdelay': {
        info: 'For a stratum 1 server, this is the access latency for the reference clock. For lower stratum servers, it is the sum of the <code>peer_delay</code> and <code>peer_rootdelay</code> for the system they are syncing off of. Similarly to <code>peer_delay</code>, lower values here are technically better, but have limited influence in peer selection.'
    },

    'ntpd.peer_rootdisp': {
        info: 'Is the same as <code>peer_rootdelay</code>, but measures accumulated <code>peer_dispersion</code> instead of accumulated <code>peer_delay</code>.'
    },

    'ntpd.peer_hmode': {
        info: 'The <code>peer_hmode</code> and <code>peer_pmode</code> variables give info about what mode the packets being sent to and received from a given peer are. Mode 1 is symmetric active (both the local system and the remote peer have each other declared as peers in <code>/etc/ntp.conf</code>), Mode 2 is symmetric passive (only one side has the other declared as a peer), Mode 3 is client, Mode 4 is server, and Mode 5 is broadcast (also used for multicast and manycast operation).',
        height: 0.2
    },

    'ntpd.peer_pmode': {
        height: 0.2
    },

    'ntpd.peer_hpoll': {
        info: 'The <code>peer_hpoll</code> and <code>peer_ppoll</code> variables are log2 representations of the polling interval in seconds.',
        height: 0.5
    },

    'ntpd.peer_ppoll': {
        height: 0.5
    },

    'ntpd.peer_precision': {
        height: 0.2
    },

    'spigotmc.tps': {
        info: '每秒运行的1、5和15分钟平均服务器滴答数。 理想化的服务器将对所有值显示20.0，但是实际上这几乎不会发生。 典型的服务器应该显示大约19.98-20.0。 较低的值表示逐渐增加的服务器端滞后时间（因此，您需要更好的服务器硬件或更低的用户限制）。 对于低于20的0.05个滴答声，红石钟将落后约0.25％。 低于约19.50的值可能会干扰复杂的自由运行的红石电路，并会显着减慢增长。'
    },

    'spigotmc.users': {
        info: '受监视的插口服务器上当前连接的用户数。'
    },

    'boinc.tasks': {
        info: '任务总数和活动任务数。活动任务是当前正在处理的任务，或者是部分处理但挂起的任务。'
    },

    'boinc.states': {
        info: '每个任务状态下的任务计数。正常的状态顺序是<code>New</code>，<code>Downloading</code>，<code>Ready to Run</code>，<code>Uploading</code>，<code>Uploaded</code>。标记为“准备运行”的任务可能正在运行，也可能正在等待计划。<code>计算错误</code>是在执行过程中由于某种原因失败的任务。<code>已中止</code>任务已手动取消，将不处理。<code>上载失败</code>是在其他情况下完成的任务，这些任务无法上载到服务器，通常表示存在网络问题。'
    },

    'boinc.sched': {
        info: 'Counts of active tasks in each scheduling state.  <code>Scheduled</code> tasks are the ones which will run if the system is permitted to process tasks.  <code>Preempted</code> tasks are on standby, and will run if a <code>Scheduled</code> task stops running for some reason.  <code>Uninitialized</code> tasks should never be present, and indicate tha the scheduler has not tried to schedule them yet.'
    },

    'boinc.process': {
        info: 'Counts of active tasks in each process state.  <code>Executing</code> tasks are running right now.  <code>Suspended</code> tasks have an associated process, but are not currently running (either because the system isn\'t processing any tasks right now, or because they have been preempted by higher priority tasks).  <code>Quit</code> tasks are exiting gracefully.  <code>Aborted</code> tasks exceeded some resource limit, and are being shut down.  <code>Copy Pending</code> tasks are waiting on a background file transfer to finish.  <code>Uninitialized</code> tasks do not have an associated process yet.'
    },

    'w1sensor.temp': {
        info: 'Temperature derived from 1-Wire temperature sensors.'
    },

    'logind.sessions': {
        info: 'Shows the number of active sessions of each type tracked by logind.'
    },

    'logind.users': {
        info: 'Shows the number of active users of each type tracked by logind.'
    },

    'logind.seats': {
        info: 'Shows the number of active seats tracked by logind.  Each seat corresponds to a combination of a display device and input device providing a physical presence for the system.'
    },

    // ------------------------------------------------------------------------
    // ProxySQL

    'proxysql.pool_status': {
        info: 'The status of the backend servers. ' +
            '<code>1=ONLINE</code> backend server is fully operational, ' +
            '<code>2=SHUNNED</code> backend sever is temporarily taken out of use because of either too many connection errors in a time that was too short, or replication lag exceeded the allowed threshold, ' +
            '<code>3=OFFLINE_SOFT</code> when a server is put into OFFLINE_SOFT mode, new incoming connections aren\'t accepted anymore, while the existing connections are kept until they became inactive. In other words, connections are kept in use until the current transaction is completed. This allows to gracefully detach a backend, ' +
            '<code>4=OFFLINE_HARD</code> when a server is put into OFFLINE_HARD mode, the existing connections are dropped, while new incoming connections aren\'t accepted either. This is equivalent to deleting the server from a hostgroup, or temporarily taking it out of the hostgroup for maintenance work, ' +
            '<code>-1</code> Unknown status.'
    },

    'proxysql.pool_net': {
        info: 'The amount of data sent to/received from the backend ' +
            '(This does not include metadata (packets\' headers, OK/ERR packets, fields\' description, etc).'
    },

    'proxysql.pool_overall_net': {
        info: 'The amount of data sent to/received from the all backends ' +
            '(This does not include metadata (packets\' headers, OK/ERR packets, fields\' description, etc).'
    },

    'proxysql.questions': {
        info: '<code>questions</code> total number of queries sent from frontends, ' +
            '<code>slow_queries</code> number of queries that ran for longer than the threshold in milliseconds defined in global variable <code>mysql-long_query_time</code>. '
    },

    'proxysql.connections': {
        info: '<code>aborted</code> number of frontend connections aborted due to invalid credential or max_connections reached, ' +
            '<code>connected</code> number of frontend connections currently connected, ' +
            '<code>created</code> number of frontend connections created, ' +
            '<code>non_idle</code> number of frontend connections that are not currently idle. '
    },

    'proxysql.pool_latency': {
        info: 'The currently ping time in microseconds, as reported from Monitor.'
    },

    'proxysql.queries': {
        info: 'The number of queries routed towards this particular backend server.'
    },

    'proxysql.pool_used_connections': {
        info: 'The number of connections are currently used by ProxySQL for sending queries to the backend server.'
    },

    'proxysql.pool_free_connections': {
        info: 'The number of connections are currently free. They are kept open in order to minimize the time cost of sending a query to the backend server.'
    },

    'proxysql.pool_ok_connections': {
        info: 'The number of connections were established successfully.'
    },

    'proxysql.pool_error_connections': {
        info: 'The number of connections weren\'t established successfully.'
    },

    'proxysql.commands_count': {
        info: 'The total number of commands of that type executed'
    },

    'proxysql.commands_duration': {
        info: 'The total time spent executing commands of that type, in ms'
    },

    // ------------------------------------------------------------------------
    // Power Supplies

    'powersupply.capacity': {
        info: undefined
    },

    'powersupply.charge': {
        info: undefined
    },

    'powersupply.energy': {
        info: undefined
    },

    'powersupply.voltage': {
        info: undefined
    },

    // ------------------------------------------------------------------------
    // VMware vSphere

    // Host specific
    'vsphere.host_mem_usage_percentage': {
        info: 'Percentage of used machine memory: <code>consumed</code> / <code>machine-memory-size</code>.'
    },

    'vsphere.host_mem_usage': {
        info:
            '<code>granted</code> is amount of machine memory that is mapped for a host, ' +
            'it equals sum of all granted metrics for all powered-on virtual machines, plus machine memory for vSphere services on the host. ' +
            '<code>consumed</code> is amount of machine memory used on the host, it includes memory used by the Service Console, the VMkernel, vSphere services, plus the total consumed metrics for all running virtual machines. ' +
            '<code>consumed</code> = <code>total host memory</code> - <code>free host memory</code>.' +
            '<code>active</code> is sum of all active metrics for all powered-on virtual machines plus vSphere services (such as COS, vpxa) on the host.' +
            '<code>shared</code> is sum of all shared metrics for all powered-on virtual machines, plus amount for vSphere services on the host. ' +
            '<code>sharedcommon</code> is amount of machine memory that is shared by all powered-on virtual machines and vSphere services on the host. ' +
            '<code>shared</code> - <code>sharedcommon</code> = machine memory (host memory) savings (KB). ' +
            'For details see <a href="https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.resmgmt.doc/GUID-BFDC988B-F53D-4E97-9793-A002445AFAE1.html">Measuring and Differentiating Types of Memory Usage</a> and ' +
            '<a href="https://www.vmware.com/support/developer/converter-sdk/conv51_apireference/memory_counters.html">Memory Counters</a> articles.'
    },

    'vsphere.host_mem_swap_rate': {
        info:
            'This statistic refers to VMkernel swapping and not to guest OS swapping. ' +
            '<code>in</code> is sum of <code>swapinRate</code> values for all powered-on virtual machines on the host.' +
            '<code>swapinRate</code> is rate at which VMKernel reads data into machine memory from the swap file. ' +
            '<code>out</code> is sum of <code>swapoutRate</code> values for all powered-on virtual machines on the host.' +
            '<code>swapoutRate</code> is rate at which VMkernel writes to the virtual machine’s swap file from machine memory.'
    },

    // VM specific
    'vsphere.vm_mem_usage_percentage': {
        info: 'Percentage of used virtual machine “physical” memory: <code>actvive</code> / <code>virtual machine configured size</code>.'
    },

    'vsphere.vm_mem_usage': {
        info:
            '<code>granted</code> is amount of guest “physical” memory that is mapped to machine memory, it includes <code>shared</code> memory amount. ' +
            '<code>consumed</code> is amount of guest “physical” memory consumed by the virtual machine for guest memory, ' +
            '<code>consumed</code> = <code>granted</code> - <code>memory saved due to memory sharing</code>. ' +
            '<code>active</code> is amount of memory that is actively used, as estimated by VMkernel based on recently touched memory pages. ' +
            '<code>shared</code> is amount of guest “physical” memory shared with other virtual machines (through the VMkernel’s transparent page-sharing mechanism, a RAM de-duplication technique). ' +
            'For details see <a href="https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.resmgmt.doc/GUID-BFDC988B-F53D-4E97-9793-A002445AFAE1.html">Measuring and Differentiating Types of Memory Usage</a> and ' +
            '<a href="https://www.vmware.com/support/developer/converter-sdk/conv51_apireference/memory_counters.html">Memory Counters</a> articles.'

    },

    'vsphere.vm_mem_swap_rate': {
        info:
            'This statistic refers to VMkernel swapping and not to guest OS swapping. ' +
            '<code>in</code> is rate at which VMKernel reads data into machine memory from the swap file. ' +
            '<code>out</code> is rate at which VMkernel writes to the virtual machine’s swap file from machine memory.'
    },

    'vsphere.vm_mem_swap': {
        info:
            'This statistic refers to VMkernel swapping and not to guest OS swapping. ' +
            '<code>swapped</code> is amount of guest physical memory swapped out to the virtual machine\'s swap file by the VMkernel. ' +
            'Swapped memory stays on disk until the virtual machine needs it.'
    },

    // Common
    'vsphere.cpu_usage_total': {
        info: '所有CPU/核心的CPU使用情况摘要统计信息。'
    },

    'vsphere.net_bandwidth_total': {
        info: '汇总所有网络接口的接收/传输统计信息。'
    },

    'vsphere.net_packets_total': {
        info: '汇总所有网络接口的接收/传输统计信息。'
    },

    'vsphere.net_errors_total': {
        info: '汇总所有网络接口的接收/传输统计信息。'
    },

    'vsphere.net_drops_total': {
        info: '汇总所有网络接口的接收/传输统计信息。'
    },

    'vsphere.disk_usage_total': {
        info: '汇总所有磁盘的读/写统计信息。'
    },

    'vsphere.disk_max_latency': {
        info: '<code>latency</code> is highest latency value across all disks.'
    },

    'vsphere.overall_status': {
        info: '<code>0</code> is unknown, <code>1</code> is OK, <code>2</code> is might have a problem, <code>3</code> is definitely has a problem.'
    },

    // ------------------------------------------------------------------------
    // VCSA
    'vcsa.system_health': {
        info:
            '<code>-1</code>: unknown; ' +
            '<code>0</code>: all components are healthy; ' +
            '<code>1</code>: one or more components might become overloaded soon; ' +
            '<code>2</code>: one or more components in the appliance might be degraded; ' +
            '<code>3</code>: one or more components might be in an unusable status and the appliance might become unresponsive soon; ' +
            '<code>4</code>: no health data is available.'
    },

    'vcsa.components_health': {
        info:
            '<code>-1</code>: unknown; ' +
            '<code>0</code>: healthy; ' +
            '<code>1</code>: healthy, but may have some problems; ' +
            '<code>2</code>: degraded, and may have serious problems; ' +
            '<code>3</code>: unavailable, or will stop functioning soon; ' +
            '<code>4</code>: no health data is available.'
    },

    'vcsa.software_updates_health': {
        info:
            '<code>softwarepackages</code> represents information on available software updates available in the remote vSphere Update Manager repository.<br>' +
            '<code>-1</code>: unknown; ' +
            '<code>0</code>: no updates available; ' +
            '<code>2</code>: non-security updates are available; ' +
            '<code>3</code>: security updates are available; ' +
            '<code>4</code>: an error retrieving information on software updates.'
    },

    // ------------------------------------------------------------------------
    // Zookeeper

    'zookeeper.server_state': {
        info:
            '<code>0</code>: unknown, ' +
            '<code>1</code>: leader, ' +
            '<code>2</code>: follower, ' +
            '<code>3</code>: observer, ' +
            '<code>4</code>: standalone.'
    },

    // ------------------------------------------------------------------------
    // Squidlog

    'squidlog.requests': {
        info: 'Total number of requests (log lines read). It includes <code>unmatched</code>.'
    },

    'squidlog.excluded_requests': {
        info: '<code>unmatched</code> counts the lines in the log file that are not matched by the plugin parser (<a href="https://github.com/netdata/netdata/issues/new?title=squidlog%20reports%20unmatched%20lines&body=squidlog%20plugin%20reports%20unmatched%20lines.%0A%0AThis%20is%20my%20log:%0A%0A%60%60%60txt%0A%0Aplease%20paste%20your%20squid%20server%20log%20here%0A%0A%60%60%60" target="_blank">let us know</a> if you have any unmatched).'
    },

    'squidlog.type_requests': {
        info: 'Requests by response type:<br>' +
            '<ul>' +
            ' <li><code>success</code> includes 1xx, 2xx, 0, 304, 401.</li>' +
            ' <li><code>error</code> includes 5xx and 6xx.</li>' +
            ' <li><code>redirect</code> includes 3xx except 304.</li>' +
            ' <li><code>bad</code> includes 4xx except 401.</li>' +
            ' </ul>'
    },

    'squidlog.http_status_code_class_responses': {
        info: 'The HTTP response status code classes. According to <a href="https://tools.ietf.org/html/rfc7231" target="_blank">rfc7231</a>:<br>' +
            ' <li><code>1xx</code> is informational responses.</li>' +
            ' <li><code>2xx</code> is successful responses.</li>' +
            ' <li><code>3xx</code> is redirects.</li>' +
            ' <li><code>4xx</code> is bad requests.</li>' +
            ' <li><code>5xx</code> is internal server errors.</li>' +
            ' </ul>' +
            'Squid also uses <code>0</code> for a result code being unavailable, and <code>6xx</code> to signal an invalid header, a proxy error.'
    },

    'squidlog.http_status_code_responses': {
        info: 'Number of responses for each http response status code individually.'
    },

    'squidlog.uniq_clients': {
        info: 'Unique clients (requesting instances), within each data collection iteration. If data collection is <b>per second</b>, this chart shows <b>unique clients per second</b>.'
    },

    'squidlog.bandwidth': {
        info: 'The size is the amount of data delivered to the clients. Mind that this does not constitute the net object size, as headers are also counted. ' +
            'Also, failed requests may deliver an error page, the size of which is also logged here.'
    },

    'squidlog.response_time': {
        info: 'The elapsed time considers how many milliseconds the transaction busied the cache. It differs in interpretation between TCP and UDP:' +
            '<ul>' +
            ' <li><code>TCP</code> this is basically the time from having received the request to when Squid finishes sending the last byte of the response.</li>' +
            ' <li><code>UDP</code> this is the time between scheduling a reply and actually sending it.</li>' +
            ' </ul>' +
            'Please note that <b>the entries are logged after the reply finished being sent</b>, not during the lifetime of the transaction.'
    },

    'squidlog.cache_result_code_requests': {
        info: 'The Squid result code is composed of several tags (separated by underscore characters) which describe the response sent to the client. ' +
            'Check the <a href="https://wiki.squid-cache.org/SquidFaq/SquidLogs#Squid_result_codes">squid documentation</a> about them.'
    },

    'squidlog.cache_result_code_transport_tag_requests': {
        info: 'These tags are always present and describe delivery method.<br>' +
            '<ul>' +
            ' <li><code>TCP</code> requests on the HTTP port (usually 3128).</li>' +
            ' <li><code>UDP</code> requests on the ICP port (usually 3130) or HTCP port (usually 4128).</li>' +
            ' <li><code>NONE</code> Squid delivered an unusual response or no response at all. Seen with cachemgr requests and errors, usually when the transaction fails before being classified into one of the above outcomes. Also seen with responses to CONNECT requests.</li>' +
            ' </ul>'
    },

    'squidlog.cache_result_code_handling_tag_requests': {
        info: 'These tags are optional and describe why the particular handling was performed or where the request came from.<br>' +
            '<ul>' +
            ' <li><code>CF</code> at least one request in this transaction was collapsed. See <a href="http://www.squid-cache.org/Doc/config/collapsed_forwarding/" target="_blank">collapsed_forwarding</a>  for more details about request collapsing.</li>' +
            ' <li><code>CLIENT</code> usually seen with client issued a "no-cache", or analogous cache control command along with the request. Thus, the cache has to validate the object.</li>' +
            ' <li><code>IMS</code> the client sent a revalidation (conditional) request.</li>' +
            ' <li><code>ASYNC</code> the request was generated internally by Squid. Usually this is background fetches for cache information exchanges, background revalidation from <i>stale-while-revalidate</i> cache controls, or ESI sub-objects being loaded.</li>' +
            ' <li><code>SWAPFAIL</code> the object was believed to be in the cache, but could not be accessed. A new copy was requested from the server.</li>' +
            ' <li><code>REFRESH</code> a revalidation (conditional) request was sent to the server.</li>' +
            ' <li><code>SHARED</code> this request was combined with an existing transaction by collapsed forwarding.</li>' +
            ' <li><code>REPLY</code> the HTTP reply from server or peer. Usually seen on <code>DENIED</code> due to <a href="http://www.squid-cache.org/Doc/config/http_reply_access/" target="_blank">http_reply_access</a> ACLs preventing delivery of servers response object to the client.</li>' +
            ' </ul>'
    },

    'squidlog.cache_code_object_tag_requests': {
        info: 'These tags are optional and describe what type of object was produced.<br>' +
            '<ul>' +
            ' <li><code>NEGATIVE</code> only seen on HIT responses, indicating the response was a cached error response. e.g. <b>404 not found</b>.</li>' +
            ' <li><code>STALE</code> the object was cached and served stale. This is usually caused by <i>stale-while-revalidate</i> or <i>stale-if-error</i> cache controls.</li>' +
            ' <li><code>OFFLINE</code> the requested object was retrieved from the cache during <a href="http://www.squid-cache.org/Doc/config/offline_mode/" target="_blank">offline_mode</a>. The offline mode never validates any object.</li>' +
            ' <li><code>INVALID</code> an invalid request was received. An error response was delivered indicating what the problem was.</li>' +
            ' <li><code>FAILED</code> only seen on <code>REFRESH</code> to indicate the revalidation request failed. The response object may be the server provided network error or the stale object which was being revalidated depending on stale-if-error cache control.</li>' +
            ' <li><code>MODIFIED</code> only seen on <code>REFRESH</code> responses to indicate revalidation produced a new modified object.</li>' +
            ' <li><code>UNMODIFIED</code> only seen on <code>REFRESH</code> responses to indicate revalidation produced a 304 (Not Modified) status. The client gets either a full 200 (OK), a 304 (Not Modified), or (in theory) another response, depending on the client request and other details.</li>' +
            ' <li><code>REDIRECT</code> Squid generated an HTTP redirect response to this request.</li>' +
            ' </ul>'
    },

    'squidlog.cache_code_load_source_tag_requests': {
        info: 'These tags are optional and describe whether the response was loaded from cache, network, or otherwise.<br>' +
            '<ul>' +
            ' <li><code>HIT</code> the response object delivered was the local cache object.</li>' +
            ' <li><code>MEM</code> the response object came from memory cache, avoiding disk accesses. Only seen on HIT responses.</li>' +
            ' <li><code>MISS</code> the response object delivered was the network response object.</li>' +
            ' <li><code>DENIED</code> the request was denied by access controls.</li>' +
            ' <li><code>NOFETCH</code> an ICP specific type, indicating service is alive, but not to be used for this request.</li>' +
            ' <li><code>TUNNEL</code> a binary tunnel was established for this transaction.</li>' +
            ' </ul>'
    },

    'squidlog.cache_code_error_tag_requests': {
        info: 'These tags are optional and describe some error conditions which occured during response delivery.<br>' +
            '<ul>' +
            ' <li><code>ABORTED</code> the response was not completed due to the connection being aborted (usually by the client).</li>' +
            ' <li><code>TIMEOUT</code> the response was not completed due to a connection timeout.</li>' +
            ' <li><code>IGNORED</code> while refreshing a previously cached response A, Squid got a response B that was older than A (as determined by the Date header field). Squid ignored response B (and attempted to use A instead).</li>' +
            ' </ul>'
    },

    'squidlog.http_method_requests': {
        info: 'The request method to obtain an object. Please refer to section <a href="https://wiki.squid-cache.org/SquidFaq/SquidLogs#Request_methods">request-methods</a> for available methods and their description.'
    },

    'squidlog.hier_code_requests': {
        info: 'A code that explains how the request was handled, e.g. by forwarding it to a peer, or going straight to the source. ' +
            'Any hierarchy tag may be prefixed with <code>TIMEOUT_</code>, if the timeout occurs waiting for all ICP replies to return from the neighbours. The timeout is either dynamic, if the <a href="http://www.squid-cache.org/Doc/config/icp_query_timeout/" target="_blank">icp_query_timeout</a> was not set, or the time configured there has run up. ' +
            'Refer to <a href="https://wiki.squid-cache.org/SquidFaq/SquidLogs#Hierarchy_Codes" target="_blank">Hierarchy Codes</a> for details on hierarchy codes.'
    },

    'squidlog.server_address_forwarded_requests': {
        info: 'The IP address or hostname where the request (if a miss) was forwarded. For requests sent to origin servers, this is the origin server\'s IP address. ' +
            'For requests sent to a neighbor cache, this is the neighbor\'s hostname. NOTE: older versions of Squid would put the origin server hostname here.'
    },

    'squidlog.mime_type_requests': {
        info: 'The content type of the object as seen in the HTTP reply header. Please note that ICP exchanges usually don\'t have any content type.'
    },

    // ------------------------------------------------------------------------
    // CockroachDB

    'cockroachdb.process_cpu_time_combined_percentage': {
        info: 'Current combined cpu utilization, calculated as <code>(user+system)/num of logical cpus</code>.'
    },

    'cockroachdb.host_disk_bandwidth': {
        info: '所有系统主机磁盘的摘要磁盘带宽统计信息。'
    },

    'cockroachdb.host_disk_operations': {
        info: '所有系统主机磁盘上的磁盘操作摘要统计信息。'
    },

    'cockroachdb.host_disk_iops_in_progress': {
        info: '所有系统主机磁盘上正在进行的摘要磁盘iops统计信息。'
    },

    'cockroachdb.host_network_bandwidth': {
        info: 'Summary network bandwidth statistics across all system host network interfaces.'
    },

    'cockroachdb.host_network_packets': {
        info: 'Summary network packets statistics across all system host network interfaces.'
    },

    'cockroachdb.live_nodes': {
        info: 'Will be <code>0</code> if this node is not itself live.'
    },

    'cockroachdb.total_storage_capacity': {
        info: 'Entire disk capacity. It includes non-CR data, CR data, and empty space.'
    },

    'cockroachdb.storage_capacity_usability': {
        info: '<code>usable</code> is sum of empty space and CR data, <code>unusable</code> is space used by non-CR data.'
    },

    'cockroachdb.storage_usable_capacity': {
        info: 'Breakdown of <code>usable</code> space.'
    },

    'cockroachdb.storage_used_capacity_percentage': {
        info: '<code>total</code> is % of <b>total</b> space used, <code>usable</code> is % of <b>usable</b> space used.'
    },

    'cockroachdb.sql_bandwidth': {
        info: 'The total amount of SQL client network traffic.'
    },

    'cockroachdb.sql_errors': {
        info: '<code>statement</code> is statements resulting in a planning or runtime error, ' +
            '<code>transaction</code> is SQL transactions abort errors.'
    },

    'cockroachdb.sql_started_ddl_statements': {
        info: 'The amount of <b>started</b> DDL (Data Definition Language) statements. ' +
            'This type means database schema changes. ' +
            'It includes <code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>, <code>RENAME</code>, <code>TRUNCATE</code> and <code>COMMENT</code> statements.'
    },

    'cockroachdb.sql_executed_ddl_statements': {
        info: 'The amount of <b>executed</b> DDL (Data Definition Language) statements. ' +
            'This type means database schema changes. ' +
            'It includes <code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>, <code>RENAME</code>, <code>TRUNCATE</code> and <code>COMMENT</code> statements.'
    },

    'cockroachdb.sql_started_dml_statements': {
        info: 'The amount of <b>started</b> DML (Data Manipulation Language) statements.'
    },

    'cockroachdb.sql_executed_dml_statements': {
        info: 'The amount of <b>executed</b> DML (Data Manipulation Language) statements.'
    },

    'cockroachdb.sql_started_tcl_statements': {
        info: 'The amount of <b>started</b> TCL (Transaction Control Language) statements.'
    },

    'cockroachdb.sql_executed_tcl_statements': {
        info: 'The amount of <b>executed</b> TCL (Transaction Control Language) statements.'
    },

    'cockroachdb.live_bytes': {
        info: 'The amount of live data used by both applications and the CockroachDB system.'
    },

    'cockroachdb.kv_transactions': {
        info: 'KV transactions breakdown:<br>' +
            '<ul>' +
            ' <li><code>committed</code> committed KV transactions (including 1PC).</li>' +
            ' <li><code>fast-path_committed</code> KV transaction on-phase commit attempts.</li>' +
            ' <li><code>aborted</code> aborted KV transactions.</li>' +
            ' </ul>'
    },

    'cockroachdb.kv_transaction_restarts': {
        info: 'KV transactions restarts breakdown:<br>' +
            '<ul>' +
            ' <li><code>write too old</code> restarts due to a concurrent writer committing first.</li>' +
            ' <li><code>write too old (multiple)</code> restarts due to multiple concurrent writers committing first.</li>' +
            ' <li><code>forwarded timestamp (iso=serializable)</code> restarts due to a forwarded commit timestamp and isolation=SERIALIZABLE".</li>' +
            ' <li><code>possible replay</code> restarts due to possible replays of command batches at the storage layer.</li>' +
            ' <li><code>async consensus failure</code> restarts due to async consensus writes that failed to leave intents.</li>' +
            ' <li><code>read within uncertainty interval</code> restarts due to reading a new value within the uncertainty interval.</li>' +
            ' <li><code>aborted</code> restarts due to an abort by a concurrent transaction (usually due to deadlock).</li>' +
            ' <li><code>push failure</code> restarts due to a transaction push failure.</li>' +
            ' <li><code>unknown</code> restarts due to a unknown reasons.</li>' +
            ' </ul>'
    },

    'cockroachdb.ranges': {
        info: 'CockroachDB stores all user data (tables, indexes, etc.) and almost all system data in a giant sorted map of key-value pairs. ' +
            'This keyspace is divided into "ranges", contiguous chunks of the keyspace, so that every key can always be found in a single range.'
    },

    'cockroachdb.ranges_replication_problem': {
        info: 'Ranges with not optimal number of replicas:<br>' +
            '<ul>' +
            ' <li><code>unavailable</code> ranges with fewer live replicas than needed for quorum.</li>' +
            ' <li><code>under replicated</code> ranges with fewer live replicas than the replication target.</li>' +
            ' <li><code>over replicated</code> ranges with more live replicas than the replication target.</li>' +
            ' </ul>'
    },

    'cockroachdb.replicas': {
        info: 'CockroachDB replicates each range (3 times by default) and stores each replica on a different node.'
    },

    'cockroachdb.replicas_leaders': {
        info: 'For each range, one of the replicas is the <code>leader</code> for write requests, <code>not leaseholders</code> is the number of Raft leaders whose range lease is held by another store.'
    },

    'cockroachdb.replicas_leaseholders': {
        info: 'For each range, one of the replicas holds the "range lease". This replica, referred to as the <code>leaseholder</code>, is the one that receives and coordinates all read and write requests for the range.'
    },

    'cockroachdb.queue_processing_failures': {
        info: 'Failed replicas breakdown by queue:<br>' +
            '<ul>' +
            ' <li><code>gc</code> replicas which failed processing in the GC queue.</li>' +
            ' <li><code>replica gc</code> replicas which failed processing in the replica GC queue.</li>' +
            ' <li><code>replication</code> replicas which failed processing in the replicate queue.</li>' +
            ' <li><code>split</code> replicas which failed processing in the split queue.</li>' +
            ' <li><code>consistency</code> replicas which failed processing in the consistency checker queue.</li>' +
            ' <li><code>raft log</code> replicas which failed processing in the Raft log queue.</li>' +
            ' <li><code>raft snapshot</code> replicas which failed processing in the Raft repair queue.</li>' +
            ' <li><code>time series maintenance</code> replicas which failed processing in the time series maintenance queue.</li>' +
            ' </ul>'
    },

    'cockroachdb.rebalancing_queries': {
        info: 'Number of kv-level requests received per second by the store, averaged over a large time period as used in rebalancing decisions.'
    },

    'cockroachdb.rebalancing_writes': {
        info: 'Number of keys written (i.e. applied by raft) per second to the store, averaged over a large time period as used in rebalancing decisions.'
    },

    'cockroachdb.slow_requests': {
        info: 'Requests that have been stuck for a long time.'
    },

    'cockroachdb.timeseries_samples': {
        info: 'The amount of metric samples written to disk.'
    },

    'cockroachdb.timeseries_write_errors': {
        info: 'The amount of errors encountered while attempting to write metrics to disk.'
    },

    'cockroachdb.timeseries_write_bytes': {
        info: 'Size of metric samples written to disk.'
    },

    // ------------------------------------------------------------------------
    // eBPF

    'ebpf.file_descriptor': {
        info: 'File descriptor shows the number of calls for internal functions on Linux kernel. The open dimension is attached to the kernel internal function \'do_sys_open\', that is the common function called from open(2) and openat(2). The close dimension is attached to the function \'__close_fd\', that is called from system call close(2).'
    },

    'ebpf.file_error': {
        info: 'File error shows the number of calls that returned an error when called per period.'
    },

    'ebpf.deleted_objects': {
        info: 'Deleted objects monitors calls to the function \'vfs_unlink\'. This chart does not show all events to remove files from the file system, because file systems can create their own functions to remove files.'
    },

    'ebpf.io': {
        info: 'IO shows the number of calls for functions \'vfs_read\' and \'vfs_write\' independent of the return to be success or fail. Like the chart \'deleted_objects\', case the file system uses other function to store data on disks, this chart will not show events for it.'
    },

    'ebpf.io_bytes': {
        info: 'IO bytes shows the total of bytes read or written with success using the functions  \'vfs_read\' and \'vfs_write\'.'
    },

    'ebpf.io_error': {
        info: 'IO error shows the number of calls for \'vfs_read\' and \'vfs_write\' that did not have success.'
    },

    'ebpf.process_thread': {
        info: 'Process thread counts the number of times that the function \'do_fork\' was called to create a new task. Task is the common name used to define process and tasks inside the kernel, to identify the threads, Netdata also counts the number of calls for \'sys_clone\' that has the flag \'CLONE_THREAD\' set.'
    },

    'ebpf.exit': {
        info: 'Exit count the number of calls for the functions responsible to close (\'do_exit\') and release(\'release_task\') tasks.'
    },

    'ebpf.task_error': {
        info: 'Task error count the number of errors to create a new process or thread.'
    },

    'ebpf.process_status': {
        info: 'This chart demonstrate the difference between the number of process created and the number of threads created per period(\'process\' dimension), it also shows the number of possible zombie process running on system.'
    },

    // ------------------------------------------------------------------------
    // VerneMQ

    'vernemq.sockets': {
        mainheads: [
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="open_sockets"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="Connected Clients"'
                    + ' data-units="clients"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="16%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[4] + '"'
                    + ' data-decimal-digits="2"'
                    + ' role="application"></div>';
            }
        ]
    },
    'vernemq.queue_processes': {
        mainheads: [
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="queue_processes"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="Queues Processes"'
                    + ' data-units="processes"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="16%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[4] + '"'
                    + ' data-decimal-digits="2"'
                    + ' role="application"></div>';
            }
        ]
    },
    'vernemq.queue_messages_in_queues': {
        mainheads: [
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="queue_messages_current"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="Messages in the Queues"'
                    + ' data-units="messages"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="16%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[2] + '"'
                    + ' data-decimal-digits="2"'
                    + ' role="application"></div>';
            }
        ]
    },
    'vernemq.queue_messages': {
        mainheads: [
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="queue_message_in"'
                    + ' data-chart-library="easypiechart"'
                    + ' data-title="MQTT Recieve Rate"'
                    + ' data-units="messages/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="14%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[0] + '"'
                    + ' data-decimal-digits="2"'
                    + ' role="application"></div>';
            },
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="queue_message_out"'
                    + ' data-chart-library="easypiechart"'
                    + ' data-title="MQTT Send Rate"'
                    + ' data-units="messages/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="14%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[1] + '"'
                    + ' data-decimal-digits="2"'
                    + ' role="application"></div>';
            },
        ]
    },
    'vernemq.average_scheduler_utilization': {
        mainheads: [
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="system_utilization"'
                    + ' data-chart-library="gauge"'
                    + ' data-gauge-max-value="100"'
                    + ' data-title="Average Scheduler Utilization"'
                    + ' data-units="percentage"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="16%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[3] + '"'
                    + ' data-decimal-digits="2"'
                    + ' role="application"></div>';
            }
        ]
    },

    // ------------------------------------------------------------------------
    // Apache Pulsar
    'pulsar.messages_rate': {
        mainheads: [
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="pulsar_rate_in"'
                    + ' data-chart-library="easypiechart"'
                    + ' data-title="Publish"'
                    + ' data-units="messages/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[0] + '"'
                    + ' data-decimal-digits="2"'
                    + ' role="application"></div>';
            },
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="pulsar_rate_out"'
                    + ' data-chart-library="easypiechart"'
                    + ' data-title="Dispatch"'
                    + ' data-units="messages/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[1] + '"'
                    + ' data-decimal-digits="2"'
                    + ' role="application"></div>';
            },
        ]
    },
    'pulsar.subscription_msg_rate_redeliver': {
        mainheads: [
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="pulsar_subscription_msg_rate_redeliver"'
                    + ' data-chart-library="gauge"'
                    + ' data-gauge-max-value="100"'
                    + ' data-title="Redelivered"'
                    + ' data-units="messages/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="14%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[3] + '"'
                    + ' data-decimal-digits="2"'
                    + ' role="application"></div>';
            }
        ]
    },
    'pulsar.subscription_blocked_on_unacked_messages': {
        mainheads: [
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="pulsar_subscription_blocked_on_unacked_messages"'
                    + ' data-chart-library="gauge"'
                    + ' data-gauge-max-value="100"'
                    + ' data-title="Blocked On Unacked"'
                    + ' data-units="subscriptions"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="14%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[3] + '"'
                    + ' data-decimal-digits="2"'
                    + ' role="application"></div>';
            }
        ]
    },
    'pulsar.msg_backlog': {
        mainheads: [
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="pulsar_msg_backlog"'
                    + ' data-chart-library="gauge"'
                    + ' data-gauge-max-value="100"'
                    + ' data-title="Messages Backlog"'
                    + ' data-units="messages"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="14%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[2] + '"'
                    + ' data-decimal-digits="2"'
                    + ' role="application"></div>';
            }
        ]
    },

    'pulsar.namespace_messages_rate': {
        heads: [
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="publish"'
                    + ' data-chart-library="easypiechart"'
                    + ' data-title="Publish"'
                    + ' data-units="messages/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[0] + '"'
                    + ' data-decimal-digits="2"'
                    + ' role="application"></div>';
            },
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="dispatch"'
                    + ' data-chart-library="easypiechart"'
                    + ' data-title="Dispatch"'
                    + ' data-units="messages/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[1] + '"'
                    + ' data-decimal-digits="2"'
                    + ' role="application"></div>';
            },
        ]
    },
    'pulsar.namespace_subscription_msg_rate_redeliver': {
        heads: [
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="redelivered"'
                    + ' data-chart-library="gauge"'
                    + ' data-gauge-max-value="100"'
                    + ' data-title="Redelivered"'
                    + ' data-units="messages/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="14%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[3] + '"'
                    + ' data-decimal-digits="2"'
                    + ' role="application"></div>';
            }
        ]
    },
    'pulsar.namespace_subscription_blocked_on_unacked_messages': {
        heads: [
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="blocked"'
                    + ' data-chart-library="gauge"'
                    + ' data-gauge-max-value="100"'
                    + ' data-title="Blocked On Unacked"'
                    + ' data-units="subscriptions"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="14%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[3] + '"'
                    + ' data-decimal-digits="2"'
                    + ' role="application"></div>';
            }
        ]
    },
    'pulsar.namespace_msg_backlog': {
        heads: [
            function (os, id) {
                void (os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="backlog"'
                    + ' data-chart-library="gauge"'
                    + ' data-gauge-max-value="100"'
                    + ' data-title="Messages Backlog"'
                    + ' data-units="messages"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="14%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[2] + '"'
                    + ' data-decimal-digits="2"'
                    + ' role="application"></div>';
            },
        ],
    },
};

// 系统配置
const SYSTEM_PASSWORD = 'tmxkcytd000';

// 隐私保护配置
const PRIVACY_CONFIG = {
    // 水印更新频率（毫秒）
    WATERMARK_UPDATE_INTERVAL: 15000,
    // 会话超时时间（毫秒）
    SESSION_TIMEOUT: 1800000, // 30分钟
    // 最大登录尝试次数
    MAX_LOGIN_ATTEMPTS: 3,
    // 锁定时间（毫秒）
    LOCKOUT_DURATION: 300000, // 5分钟
    // 敏感信息脱敏规则
    SENSITIVE_FIELDS: ['phone', 'email', 'idCard', 'securityCode'],
    // 防截屏检测间隔
    SCREEN_PROTECTION_INTERVAL: 500,
    // 开发者工具检测阈值
    DEVTOOLS_THRESHOLD: 160
};

// 模拟成员数据库
const membersDatabase = {
    'TM201907033021925': {
        name: '李锦华',
        id: 'TM201907033021925',
        employeeId: '21925',
        position: '高级演员、摄影兼编剧',
        department: '演员部',
        team: '天马行空创意团队',

        gender: '男',
        age: 18,
        birth: '2007-03-30',
        phone: '19873635616',
        email: 'ljh@tmxk.xyz',
        idCard: '43072320070330019X',
        joinDate: '2019-03-01',
        jobTitle: '高级演员兼编剧、摄影',
        status: '在职',
        recordStatus: '激活',
        education: '高中',
        team: '天马行空创意团队',
        photo: 'ljh.jpg',
        cardIssueDate: '2025-03-01',
        cardExpiryDate: '2028-03-01',
        securityCode: 'TMXK-2025-A7B9C3D2',
        previewCode: 'PREVIEW-XYZ-789456',
        positionTitle: '演员兼编剧',
        positionDepartment: '演员部',
        positionMajor: '演员、编剧',

        positionStatus: '录用',
        positionSecurityCode: 'SEC-2024-TMXK-001',
        recordNumber: 'TMXK17494800412726790',
        createTime: '2025-06-09 22:40:41'
    },
    'TM201907072521931': {
        name: '庹无悸',
        id: 'TM201907072521931',
        employeeId: '21931',
        position: '高级演员',
        department: '演员部',
        gender: '男',
        age: 18,
        birth: '2007-07-25',
        phone: '18216169961',
        email: 'twj@tmxk.xyz',
        idCard: '430781200707250058',
        joinDate: '2023-06-15',
        jobTitle: '高级演员',
        status: '在职',
        recordStatus: '激活',
        education: '高中',
        team: '天马行空创意团队',
        photo: 'twj.jpg',
        cardIssueDate: '2025-06-15',
        cardExpiryDate: '2027-06-15',
        securityCode: '528394027292',
        previewCode: 'PREVIEW-TWJ-21931',
        positionTitle: '高级演员',
        positionDepartment: '演员部',
        positionMajor: '演员',
        positionStatus: '录用',
        positionSecurityCode: 'SEC-2025-21931',
        recordNumber: 'TMXK17494800453426473',
        createTime: '2025-06-10 22:40:41'
    },
    'TM003': {
        name: '王五',
        id: 'TM003',
        employeeId: 'EMP2019003',
        position: '前端开发工程师',
        department: '技术部',
        gender: '男',
        age: 30,
        birth: '1994-03-10',
        phone: '13800138003',
        email: 'wangwu@tmxk.com',
        idCard: '42010219940310351X',
        joinDate: '2019-09-01',
        jobTitle: '前端开发工程师',
        status: '在职',
        recordStatus: '完整',
        education: '本科',
        team: '天马行空创意团队',
        photo: 'https://via.placeholder.com/200x200/28a745/ffffff?text=王五',
        cardIssueDate: '2019-09-01',
        cardExpiryDate: '2024-09-01',
        securityCode: 'TMXK-2019-C5D8F2A9',
        previewCode: 'PREVIEW-DEF-456321',
        positionTitle: '高级前端开发工程师',
        positionDepartment: '技术部',
        positionMajor: '前端架构设计',
        positionStatus: '在职',
        positionSecurityCode: 'SEC-2024-TMXK-003',
        recordNumber: 'TMX-2019-003003',
        createTime: '2019-09-01 10:00:00'
    }
};

// 模拟考试数据
const examData = {
    'TM201907033021925': [
        {
            name: '2025年天马行空创意团队升职考核考试',
            score: 60,
            date: '2025-07-21',
            type: '理论考核',
            status: '通过',
            files: [
                { name: '考试成绩单.pdf', icon: '📊' },
            ]
        },
    ],
    'TM201907072521931': [
        {
            name: '2025年天马行空创意团队升职考核考试',
            score: 91,
            date: '2025-07-21',
            type: '理论测试',
            status: '通过',
            files: [
                { name: '考试成绩表.pdf', icon: '📊' },
            ]
        },
        {
            name: '2025年天马行空创意团队升职考核考试',
            score: 60,
            date: '2025-07-21',
            type: '技能测试',
            status: '通过',
            files: [
                { name: '考试成绩表.pdf', icon: '📊' },
            ]
        }
    ],
    'TM003': [
        {
            name: '前端开发技能测试',
            score: 89,
            date: '2024-01-25',
            type: '技能测试',
            status: '通过',
            files: [
                { name: '代码审查报告.pdf', icon: '💻' },
                { name: '技能测试结果.pdf', icon: '📊' }
            ]
        }
    ]
};

// 模拟投档信息记录数据
const applicationData = {
    'TM201907033021925': [
        {
            date: '2025-01-15',
            status: '录用',
            position: '高级演员',
            department: '演员部',
            major: '演员、编剧',
            jobStatus: '正式录用'
        },
        {
            date: '2024-12-20',
            status: '投档中',
            position: '摄影助理',
            department: '摄影部',
            major: '摄影技术',
            jobStatus: '审核中'
        },
        {
            date: '2024-11-10',
            status: '自由状态',
            position: '创意策划',
            department: '策划部',
            major: '创意策划',
            jobStatus: '待投档'
        }
    ],
    'TM201907072521931': [
        {
            date: '2025-01-10',
            status: '录用',
            position: '高级演员',
            department: '演员部',
            major: '演员',
            jobStatus: '正式录用'
        },
        {
            date: '2024-12-15',
            status: '投档中',
            position: '编剧助理',
            department: '编剧部',
            major: '编剧创作',
            jobStatus: '面试中'
        },
        {
            date: '2024-11-05',
            status: '自由状态',
            position: '导演助理',
            department: '导演部',
            major: '导演技术',
            jobStatus: '待投档'
        }
    ],
    'TM003': [
        {
            date: '2024-12-01',
            status: '录用',
            position: '前端开发工程师',
            department: '技术部',
            major: '前端架构设计',
            jobStatus: '正式录用'
        }
    ]
};

// 模拟证书数据
const certificateData = {
    'TM201907033021925': [
        {
            name: '天马行空创意团队职业资格认证',
            issueDate: '2025-07-21',

            expiryDate: '永久',
            number: '528394027106',
            issuer: '天马行空创意团队',
            status: '有效',
            files: [
                { name: '职业资格认证书.pdf', icon: '🏆' }
            ]
        },
      
    ],
    'TM201907072521931': [
        {
            name: '天马行空创意团队职业资格认证',
            issueDate: '2025-07-21',
            expiryDate: '永久',
            number: '528394027292',
            issuer: '天马行空创意团队',
            status: '有效',
            files: [
                { name: '职业资格认证书.pdf', icon: '🏆' }
            ]
        }
    ],
    'TM003': [
        {
            name: '前端开发工程师认证',
            issueDate: '2023-10-05',
            expiryDate: '2025-10-05',
            number: 'FE-2023-007890',
            issuer: '前端开发技术联盟',
            status: '有效',
            files: [
                { name: '前端认证证书.pdf', icon: '🏆' }
            ]
        }
    ]
};

// 为可以在线预览的文件提供映射（示例用公共可嵌入PDF/图片URL）
const filePreviewUrlMap = {
    // 李锦华 - 考试
    'TM201907033021925::考试成绩单.pdf': 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
    // 李锦华 - 证书
    'TM201907033021925::职业资格认证书.pdf': 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
    // 李锦华 - 个人档案表
    'TM201907033021925::LJH天马行空创意团队电子系统个人档案表.docx': 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
    
    // 庹无悸 - 考试
    'TM201907072521931::考试成绩表.pdf': 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
    // 庹无悸 - 证书
    'TM201907072521931::职业资格认证书.pdf': 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
    // 庹无悸 - 个人档案表
    'TM201907072521931::TWJ天马行空创意团队电子系统个人档案表.docx': 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
};

// 成员文件夹映射（用于本地文件预览与下载）
const memberFolderMap = {
    'TM201907033021925': 'ljh/',
    'TM201907072521931': 'twj/'
};

// 根据文件名和成员ID获取预览URL（优先成员目录）
function getPreviewUrl(memberId, fileName) {
    const base = memberFolderMap[memberId];
    if (base) {
        return encodeURI(base + fileName);
    }
    return filePreviewUrlMap[`${memberId}::${fileName}`] || '';
}

// 以URL下载文件
function downloadFileByUrl(url, fileName) {
    if (!url) {
        showNotification('文件不可用或尚未配置下载链接', 'error');
        return;
    }
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName || '';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    a.remove();
}

// 打开在线预览
function openViewer(title, url) {
    if (!url) {
        showNotification('该文件暂不支持在线预览', 'warning');
        return;
    }
    const modal = document.getElementById('viewerModal');
    const frame = document.getElementById('viewerFrame');
    const t = document.getElementById('viewerTitle');
    t.textContent = title || '在线预览';
    frame.src = url;
    modal.style.display = 'flex';
}

// 关闭预览
function closeViewer() {
    const modal = document.getElementById('viewerModal');
    const frame = document.getElementById('viewerFrame');
    frame.src = 'about:blank';
    modal.style.display = 'none';
}

// 打开文件预览功能
function openFilePreview(fileName) {
    // 获取当前查询的成员ID
    const identityCard = document.getElementById('identityCard').value.trim();
    const memberFolder = memberFolderMap[identityCard] || '';
    
    if (!memberFolder) {
        showNotification('无法确定成员文件夹路径', 'error');
        return;
    }
    
    const fileUrl = memberFolder + encodeURIComponent(fileName);
    
    // 对于DOCX文件，提示用户下载查看
    if (fileName.toLowerCase().endsWith('.docx')) {
        showNotification('DOCX文件需要下载后查看，请使用Microsoft Word或WPS打开', 'info');
        window.open(fileUrl, '_blank');
    } else if (fileName.toLowerCase().endsWith('.pdf')) {
        openViewer(fileName, fileUrl);
    } else if (fileName.toLowerCase().match(/\.(jpg|jpeg|png|gif|bmp)$/i)) {
        openViewer(fileName, fileUrl);
    } else {
        // 对于其他文件类型，直接在新窗口打开
        window.open(fileUrl, '_blank');
    }
}

// 替换原下载按钮渲染逻辑：增加“查看”与“下载”
function renderFileItem(memberId, file) {
    const previewUrl = getPreviewUrl(memberId, file.name);
    return `
        <div class="file-item">
            <span class="file-icon">${file.icon || '📄'}</span>
            <span class="file-name">${file.name}</span>
            <div class="file-actions">
                <button class="view-btn" onclick="openViewer('${file.name}', '${previewUrl}')">查看</button>
                <button class="download-btn" onclick="downloadFileByUrl('${previewUrl}', '${file.name}')">下载</button>
            </div>
        </div>
    `;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否已经登录
    if (localStorage.getItem('tmxk_logged_in') === 'true') {
        showMainSection();
    }
});

// 登录安全控制
let loginAttempts = 0;
let lockoutTime = 0;
let sessionStartTime = 0;

// 登录功能
function login() {
    // 检查是否被锁定
    if (isLockedOut()) {
        const remainingTime = Math.ceil((lockoutTime + PRIVACY_CONFIG.LOCKOUT_DURATION - Date.now()) / 1000);
        showNotification(`账户已被锁定，请等待 ${remainingTime} 秒后重试`, 'error');
        return;
    }
    
    const password = document.getElementById('password').value;
    
    if (password === SYSTEM_PASSWORD) {
        // 登录成功
        loginAttempts = 0;
        sessionStartTime = Date.now();
        localStorage.setItem('tmxk_logged_in', 'true');
        localStorage.setItem('tmxk_session_start', sessionStartTime.toString());
        showMainSection();
        showNotification('登录成功！欢迎使用天马行空创意团队成员信息查询系统', 'success');
        
        // 启动会话监控
        startSessionMonitoring();
        
        // 记录登录日志
        logSecurityEvent('LOGIN_SUCCESS', '用户登录成功');
    } else {
        // 登录失败
        loginAttempts++;
        logSecurityEvent('LOGIN_FAILED', `登录失败，尝试次数: ${loginAttempts}`);
        
        if (loginAttempts >= PRIVACY_CONFIG.MAX_LOGIN_ATTEMPTS) {
            lockoutTime = Date.now();
            localStorage.setItem('tmxk_lockout_time', lockoutTime.toString());
            showNotification('登录失败次数过多，账户已被锁定5分钟', 'error');
            logSecurityEvent('ACCOUNT_LOCKED', '账户因多次登录失败被锁定');
        } else {
            const remainingAttempts = PRIVACY_CONFIG.MAX_LOGIN_ATTEMPTS - loginAttempts;
            showNotification(`密码错误！还剩 ${remainingAttempts} 次尝试机会`, 'error');
        }
        
        document.getElementById('password').value = '';
        document.getElementById('password').focus();
    }
}

// 检查是否被锁定
function isLockedOut() {
    const storedLockoutTime = localStorage.getItem('tmxk_lockout_time');
    if (!storedLockoutTime) return false;
    
    const lockoutEndTime = parseInt(storedLockoutTime) + PRIVACY_CONFIG.LOCKOUT_DURATION;
    if (Date.now() < lockoutEndTime) {
        return true;
    } else {
        // 锁定时间已过，清除锁定状态
        localStorage.removeItem('tmxk_lockout_time');
        loginAttempts = 0;
        return false;
    }
}

// 启动会话监控
function startSessionMonitoring() {
    setInterval(() => {
        checkSessionTimeout();
    }, 60000); // 每分钟检查一次
}

// 检查会话超时
function checkSessionTimeout() {
    const sessionStart = localStorage.getItem('tmxk_session_start');
    if (!sessionStart) return;
    
    const sessionAge = Date.now() - parseInt(sessionStart);
    if (sessionAge > PRIVACY_CONFIG.SESSION_TIMEOUT) {
        logout();
        showNotification('会话已超时，请重新登录', 'warning');
        logSecurityEvent('SESSION_TIMEOUT', '用户会话超时自动登出');
    }
}

// 退出登录
function logout() {
    logSecurityEvent('LOGOUT', '用户主动退出登录');
    localStorage.removeItem('tmxk_logged_in');
    localStorage.removeItem('tmxk_session_start');
    showLoginSection();
    showNotification('已退出登录', 'info');
}

// 安全事件日志记录
function logSecurityEvent(eventType, description) {
    const timestamp = new Date().toISOString();
    const event = {
        type: eventType,
        description: description,
        timestamp: timestamp,
        userAgent: navigator.userAgent,
        ip: '127.0.0.1', // 实际应用中应该从服务器获取
        sessionId: localStorage.getItem('tmxk_session_id') || 'unknown'
    };
    
    // 存储到本地存储（实际应用中应该发送到服务器）
    const securityLog = JSON.parse(localStorage.getItem('tmxk_security_log') || '[]');
    securityLog.push(event);
    
    // 只保留最近100条记录
    if (securityLog.length > 100) {
        securityLog.splice(0, securityLog.length - 100);
    }
    
    localStorage.setItem('tmxk_security_log', JSON.stringify(securityLog));
    
    // 控制台输出（生产环境中应该移除）
    console.log(`[SECURITY] ${eventType}: ${description}`, event);
}

// 显示主界面
function showMainSection() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('mainSection').style.display = 'block';
}

// 显示登录界面
function showLoginSection() {
    document.getElementById('loginSection').style.display = 'flex';
    document.getElementById('mainSection').style.display = 'none';
    document.getElementById('password').value = '';
}

// 查询成员信息
function searchMember() {
    const identityCard = document.getElementById('identityCard').value.trim();
    
    if (!identityCard) {
        showNotification('请输入身份卡号码', 'warning');
        return;
    }
    
    const member = membersDatabase[identityCard];
    
    if (member) {
        displayMemberInfo(member);
        showNotification(`找到成员：${member.name}`, 'success');
    } else {
        showNotification('未找到该身份卡对应的成员信息', 'error');
        document.getElementById('memberInfo').style.display = 'none';
    }
}

// 显示成员信息
function displayMemberInfo(member) {
    // 更新基本信息
    document.getElementById('memberName').textContent = member.name;
    document.getElementById('memberIdValue').textContent = member.id;
    document.getElementById('memberPositionValue').textContent = member.position;
    
    // 更新照片（支持成员目录）
    const basePath = memberFolderMap[member.id] || '';
    const photoSrc = basePath && member.photo && !member.photo.includes('/') ? (basePath + member.photo) : (member.photo || 'default-avatar.png');
    document.getElementById('memberPhoto').src = photoSrc;
    document.getElementById('cardPhoto').src = photoSrc;
    
    // 更新文件档案 - 动态显示成员的所有文件
    const profileFilesContainer = document.getElementById('profileFiles');
    profileFilesContainer.innerHTML = '';
    
    // 获取成员文件夹路径
    const memberFolder = memberFolderMap[member.id] || '';
    
    // 根据成员ID确定正确的文件名
    let photoFileName, profileDocFileName;
    if (member.id === 'TM201907033021925') { // 李锦华
        photoFileName = 'ljh.jpg';
        profileDocFileName = 'LJH天马行空创意团队电子系统个人档案表.docx';
    } else if (member.id === 'TM201907072521931') { // 庹无悸
        photoFileName = 'twj.jpg';
        profileDocFileName = 'TWJ天马行空创意团队电子系统个人档案表.docx';
    } else {
        photoFileName = member.photo || 'default-avatar.png';
        profileDocFileName = '个人档案表.docx';
    }
    
    // 添加本人照片
    const photoFile = document.createElement('div');
    photoFile.className = 'file-item';
    photoFile.innerHTML = `
        <span class="file-icon">👤</span>
        <span class="file-name">本人照片 - ${photoFileName}</span>
        <button class="download-btn" onclick="window.open('${memberFolder}${photoFileName}', '_blank')">查看</button>
    `;
    profileFilesContainer.appendChild(photoFile);
    
    // 添加个人档案表
    const profileDocFile = document.createElement('div');
    profileDocFile.className = 'file-item';
    profileDocFile.innerHTML = `
        <span class="file-icon">📋</span>
        <span class="file-name">${profileDocFileName}</span>
        <button class="download-btn" onclick="window.open('${memberFolder}${profileDocFileName}', '_blank')">下载</button>
        <button class="preview-btn" onclick="openFilePreview('${profileDocFileName}')">查看</button>
    `;
    profileFilesContainer.appendChild(profileDocFile);
    
    // 添加身份卡正面照片
    const idFrontFile = document.createElement('div');
    idFrontFile.className = 'file-item';
    idFrontFile.innerHTML = `
        <span class="file-icon">🆔</span>
        <span class="file-name">身份卡正面照片 - 身份卡正面.PNG</span>
        <button class="download-btn" onclick="window.open('${memberFolder}身份卡正面.PNG', '_blank')">查看</button>
    `;
    profileFilesContainer.appendChild(idFrontFile);
    
    // 添加身份卡反面照片
    const idBackFile = document.createElement('div');
    idBackFile.className = 'file-item';
    idBackFile.innerHTML = `
        <span class="file-icon">🆔</span>
        <span class="file-name">身份卡反面照片 - 身份卡反面.PNG</span>
        <button class="download-btn" onclick="window.open('${memberFolder}身份卡反面.PNG', '_blank')">查看</button>
    `;
    profileFilesContainer.appendChild(idBackFile);
    
    // 更新考试信息
    const examListContainer = document.getElementById('examList');
    examListContainer.innerHTML = '';
    
    const exams = examData[member.id] || [];
    exams.forEach(exam => {
        const examItem = document.createElement('div');
        examItem.className = 'exam-item';
        examItem.innerHTML = `
            <div class="exam-header">
                <h4>${exam.name}</h4>
                <span class="exam-score">${exam.score}分</span>
            </div>
            <div class="exam-details">
                <p><strong>考试日期：</strong>${exam.date}</p>
                <p><strong>考试类型：</strong>${exam.type}</p>
                <p><strong>考试状态：</strong><span class="status-${exam.status === '通过' ? 'pass' : 'fail'}">${exam.status}</span></p>
            </div>
            <div class="exam-files">
                <h5>相关文件：</h5>
                <div class="file-item">
                    <span class="file-icon">📄</span>
                    <span class="file-name">${member.id === 'TM201907033021925' ? '考试成绩单.pdf' : '考试成绩表.pdf'}</span>
                    <button class="download-btn" onclick="window.open('${memberFolder}${member.id === 'TM201907033021925' ? '考试成绩单.pdf' : '考试成绩表.pdf'}', '_blank')">在线浏览</button>
                </div>
            </div>
        `;
        examListContainer.appendChild(examItem);
    });
    
    // 更新证书信息
    const certificateListContainer = document.getElementById('certificateList');
    certificateListContainer.innerHTML = '';
    
    const certificates = certificateData[member.id] || [];
    certificates.forEach(cert => {
        const certItem = document.createElement('div');
        certItem.className = 'certificate-item';
        certItem.innerHTML = `
            <div class="certificate-header">
                <h4>${cert.name}</h4>
                <span class="certificate-status">${cert.status}</span>
            </div>
            <div class="certificate-details">
                <p><strong>获得日期：</strong>${cert.issueDate}</p>
                <p><strong>有效期至：</strong>${cert.expiryDate}</p>
                <p><strong>证书编号：</strong>${cert.number}</p>
                <p><strong>颁发机构：</strong>${cert.issuer}</p>
            </div>
            <div class="certificate-files">
                <h5>证书文件：</h5>
                <div class="file-item">
                    <span class="file-icon">🏆</span>
                    <span class="file-name">职业资格认证书.pdf</span>
                    <button class="download-btn" onclick="window.open('${memberFolder}职业资格认证书.pdf', '_blank')">在线浏览</button>
                </div>
            </div>
        `;
        certificateListContainer.appendChild(certItem);
    });
    
    // 更新身份卡文件
    const identityFilesContainer = document.getElementById('identityFiles');
    identityFilesContainer.innerHTML = '';
    
    // 本人照片
    const profilePhoto = document.createElement('div');
    profilePhoto.className = 'file-item';
    profilePhoto.innerHTML = `
        <span class="file-icon">👤</span>
        <span class="file-name">本人照片 - ${photoFileName}</span>
        <button class="download-btn" onclick="window.open('${memberFolder}${photoFileName}', '_blank')">查看</button>
    `;
    identityFilesContainer.appendChild(profilePhoto);
    
    // 身份卡正面照片
    const idFrontCard = document.createElement('div');
    idFrontCard.className = 'file-item';
    idFrontCard.innerHTML = `
        <span class="file-icon">🆔</span>
        <span class="file-name">身份卡正面照片 - 身份卡正面.PNG</span>
        <button class="download-btn" onclick="window.open('${memberFolder}身份卡正面.PNG', '_blank')">查看</button>
    `;
    identityFilesContainer.appendChild(idFrontCard);
    
    // 身份卡反面照片
    const idBackCard = document.createElement('div');
    idBackCard.className = 'file-item';
    idBackCard.innerHTML = `
        <span class="file-icon">🆔</span>
        <span class="file-name">身份卡反面照片 - 身份卡反面.PNG</span>
        <button class="download-btn" onclick="window.open('${memberFolder}身份卡反面.PNG', '_blank')">查看</button>
    `;
    identityFilesContainer.appendChild(idBackCard);
    document.getElementById('profileName').textContent = member.name;
    document.getElementById('profileGender').textContent = member.gender;
    document.getElementById('profileEmployeeId').textContent = member.employeeId;
    document.getElementById('profileRecordNumber').textContent = member.recordNumber || '-';
    document.getElementById('profileAge').textContent = member.age;
    document.getElementById('profileBirth').textContent = member.birth;
    document.getElementById('profileCreateTime').textContent = member.createTime || '-';
    document.getElementById('profilePhone').textContent = member.phone;
    document.getElementById('profileEmail').textContent = member.email;
    document.getElementById('profileIdCard').textContent = member.idCard;
    document.getElementById('profileJoinDate').textContent = member.joinDate;
    document.getElementById('profileDepartment').textContent = member.department;
    document.getElementById('profileJobTitle').textContent = member.jobTitle;
    document.getElementById('profileStatus').textContent = member.status;
    document.getElementById('profileRecordStatus').textContent = member.recordStatus;
    document.getElementById('profileEducation').textContent = member.education;
    document.getElementById('profileTeam').textContent = member.team;
    document.getElementById('positionTitle').textContent = member.positionTitle;
    document.getElementById('positionDepartment').textContent = member.positionDepartment;
    document.getElementById('positionMajor').textContent = member.positionMajor;
    // 更新投档状态，添加状态徽章样式
    const positionStatusElement = document.getElementById('positionStatus');
    if (positionStatusElement) {
        positionStatusElement.textContent = member.positionStatus;
        positionStatusElement.className = 'status-badge';
        
        // 根据状态设置不同的背景色
        if (member.positionStatus === '录用') {
            positionStatusElement.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
        } else if (member.positionStatus === '投档中') {
            positionStatusElement.style.background = 'linear-gradient(135deg, #ffc107, #fd7e14)';
        } else if (member.positionStatus === '自由状态') {
            positionStatusElement.style.background = 'linear-gradient(135deg, #6c757d, #495057)';
        } else {
            positionStatusElement.style.background = 'linear-gradient(135deg, #17a2b8, #6f42c1)';
        }
    }
    document.getElementById('positionSecurityCode').textContent = member.positionSecurityCode;
    if (document.getElementById('positionName')) {
        document.getElementById('positionName').textContent = member.name;
    }
    if (document.getElementById('positionId')) {
        document.getElementById('positionId').textContent = member.id;
    }
    if (document.getElementById('positionEmployeeId')) {
        document.getElementById('positionEmployeeId').textContent = member.employeeId || '-';
    }
    
    // 更新身份卡信息
    document.getElementById('cardName').textContent = member.name;
    document.getElementById('cardNumber').textContent = member.id;
    document.getElementById('cardDepartment').textContent = member.department;
    document.getElementById('cardPosition').textContent = member.position;
    document.getElementById('cardIssueDate').textContent = member.cardIssueDate;
    document.getElementById('cardExpiryDate').textContent = member.cardExpiryDate;
    document.getElementById('cardSecurityCode').textContent = member.securityCode;
    document.getElementById('cardPreviewCode').textContent = member.previewCode;

    // 设置数据更新时间（当前时间）
    const now = new Date();
    const updateTime = now.toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('positionUpdateTime').textContent = updateTime;
    
    // 加载投档信息记录
    loadApplicationHistory(member.id);
    
    // 显示成员信息区域
    document.getElementById('memberInfo').style.display = 'block';
    
    // 默认显示档案信息标签页
    showTab('profile');
}

// 切换标签页
function switchTab(tabName) {
    // 隐藏所有标签页内容
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // 移除所有标签按钮的激活状态
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 显示选中的标签页
    document.getElementById(tabName).classList.add('active');
    
    // 激活对应的标签按钮
    event.target.classList.add('active');
}

// 显示标签页
function showTab(tabName) {
    // 隐藏所有标签页内容
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // 移除所有标签页按钮的active状态
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 显示选中的标签页内容
    const contentEl = document.getElementById(tabName + 'Tab');
    if (contentEl) contentEl.classList.add('active');
    
    // 激活对应的标签页按钮（不依赖 event）
    const btnEl = document.querySelector(`.tab-btn[onclick="showTab('${tabName}')"]`);
    if (btnEl) btnEl.classList.add('active');
    
    // 如果是考试信息标签页，加载考试数据
    if (tabName === 'exam') {
        loadExamData();
    }
    
    // 如果是证书信息标签页，加载证书数据
    if (tabName === 'certificate') {
        loadCertificateData();
    }

    // 如果是身份卡信息标签页，加载身份卡相关文件
    if (tabName === 'identity') {
        loadIdentityFiles();
    }
    
    // 如果是投档信息标签页，加载投档信息记录
    if (tabName === 'position') {
        const identityCard = document.getElementById('identityCard').value.trim();
        if (identityCard && membersDatabase[identityCard]) {
            loadApplicationHistory(identityCard);
        }
    }
}

function loadIdentityFiles() {
    const identityCard = document.getElementById('identityCard').value.trim();
    const listEl = document.getElementById('identityFiles');
    if (!listEl) return;

    // 仅对存在成员目录映射的成员渲染示例文件
    if (!identityCard || !memberFolderMap[identityCard]) {
        listEl.innerHTML = '<div class="no-data">暂无身份卡文件</div>';
        return;
    }

    const files = [
        { name: '身份卡正面.PNG', icon: '🆔' },
        { name: '身份卡反面.PNG', icon: '🆔' }
    ];

    listEl.innerHTML = files.map(f => renderFileItem(identityCard, f)).join('');
}

// 加载考试数据
function loadExamData() {
    const identityCard = document.getElementById('identityCard').value.trim();
    const examList = document.getElementById('examList');
    
    if (!identityCard || !membersDatabase[identityCard]) {
        return;
    }
    
    const exams = examData[identityCard] || [];
    
    if (exams.length === 0) {
        examList.innerHTML = '<div class="no-data">暂无考试记录</div>';
        return;
    }
    
    examList.innerHTML = exams.map(exam => `
        <div class="exam-item">
            <div class="exam-header">
                <h4>${exam.name}</h4>
                <span class="exam-score">${exam.score}分</span>
            </div>
            <div class="exam-details">
                <p><strong>考试日期：</strong>${exam.date}</p>
                <p><strong>考试类型：</strong>${exam.type}</p>
                <p><strong>考试状态：</strong><span class="status-pass">${exam.status}</span></p>
            </div>
            <div class="exam-files">
                <h5>相关文件：</h5>
                ${(exam.files || []).map(file => renderFileItem(identityCard, file)).join('')}
            </div>
        </div>
    `).join('');
}

// 加载证书数据
function loadCertificateData() {
    const identityCard = document.getElementById('identityCard').value.trim();
    const certificateList = document.getElementById('certificateList');
    
    if (!identityCard || !membersDatabase[identityCard]) {
        return;
    }
    
    const certificates = certificateData[identityCard] || [];
    
    if (certificates.length === 0) {
        certificateList.innerHTML = '<div class="no-data">暂无证书记录</div>';
        return;
    }
    
    certificateList.innerHTML = certificates.map(cert => `
        <div class="certificate-item">
            <div class="certificate-header">
                <h4>${cert.name}</h4>
                <span class="certificate-status">${cert.status}</span>
            </div>
            <div class="certificate-details">
                <p><strong>获得日期：</strong>${cert.issueDate}</p>
                <p><strong>有效期至：</strong>${cert.expiryDate}</p>
                <p><strong>证书编号：</strong>${cert.number}</p>
                <p><strong>颁发机构：</strong>${cert.issuer}</p>
            </div>
            <div class="certificate-files">
                <h5>证书文件：</h5>
                ${(cert.files || []).map(file => renderFileItem(identityCard, file)).join('')}
            </div>
        </div>
    `).join('');
}

// 显示通知消息
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // 添加样式
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        max-width: 400px;
        word-wrap: break-word;
    `;
    
    // 根据类型设置背景色
    switch (type) {
        case 'success':
            notification.style.background = '#28a745';
            break;
        case 'error':
            notification.style.background = '#dc3545';
            break;
        case 'warning':
            notification.style.background = '#ffc107';
            notification.style.color = '#212529';
            break;
        default:
            notification.style.background = '#17a2b8';
    }
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 3秒后自动移除
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .no-data {
        text-align: center;
        padding: 40px;
        color: #6c757d;
        font-style: italic;
    }
`;
document.head.appendChild(style);

// 回车键登录
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        if (document.getElementById('loginSection').style.display !== 'none') {
            login();
        } else if (document.getElementById('identityCard').value.trim()) {
            searchMember();
        }
    }
});

// 输入框焦点事件
document.getElementById('password').addEventListener('focus', function() {
    this.select();
});

document.getElementById('identityCard').addEventListener('focus', function() {
    this.select();
});

// 页面加载完成后的初始化
window.addEventListener('load', function() {
    // 添加一些交互效果
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
    
    // 添加按钮点击效果
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});

// 水印功能
function generateVerificationCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

function generateSessionId() {
    return 'SESSION-' + Date.now().toString(36).toUpperCase();
}

function updateQueryWatermark() {
    const now = new Date();
    const queryTime = now.toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    const verificationCode = generateVerificationCode();
    const sessionId = generateSessionId();
    
    // 更新查询时间戳
    const queryTimeElement = document.getElementById('queryTime');
    if (queryTimeElement) {
        queryTimeElement.textContent = queryTime;
    }
    
    // 更新防伪码
    const verificationCodeElement = document.getElementById('verificationCode');
    if (verificationCodeElement) {
        verificationCodeElement.textContent = verificationCode;
    }
    
    // 添加用户ID到水印
    const privacyWatermark = document.getElementById('privacyWatermark');
    if (privacyWatermark) {
        privacyWatermark.setAttribute('data-user-id', sessionId);
        privacyWatermark.setAttribute('data-query-time', queryTime);
    }
    
    // 动态更新隐私水印内容
    const userInfo = currentUser || { name: '访客' };
    const watermarkText = `CONFIDENTIAL - ${userInfo.name} - ${sessionId}`;
    
    // 创建动态水印样式
    const watermarkStyle = document.createElement('style');
    watermarkStyle.id = 'dynamic-watermark-style';
    watermarkStyle.textContent = `
        .privacy-watermark::before {
            content: "${watermarkText}";
            font-size: 24px;
            color: rgba(255, 0, 0, 0.15);
            transform: translate(-50%, -50%) rotate(-30deg);
            white-space: nowrap;
            letter-spacing: 4px;
        }
    `;
    
    // 移除旧的样式并添加新样式
    const oldStyle = document.getElementById('dynamic-watermark-style');
    if (oldStyle) {
        oldStyle.remove();
    }
    document.head.appendChild(watermarkStyle);
}

// 增强防截屏保护
function enableScreenProtection() {
    let protectionActive = true;
    let devTools = false;
    let screenshotAttempts = 0;
    
    // 阻止常见的截屏快捷键
    document.addEventListener('keydown', function(e) {
        if (e.key === 'PrintScreen' || 
            (e.ctrlKey && e.key === 'p') || 
            (e.ctrlKey && e.shiftKey && e.key === 'S') ||
            (e.ctrlKey && e.key === 'u') ||
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.shiftKey && e.key === 'J') ||
            (e.ctrlKey && e.key === 'F12')) {
            e.preventDefault();
            screenshotAttempts++;
            logSecurityEvent('SCREENSHOT_BLOCKED', `阻止截屏操作，尝试次数: ${screenshotAttempts}`);
            
            if (screenshotAttempts >= 3) {
                showNotification('检测到多次截屏尝试，系统已记录此行为', 'warning');
                logSecurityEvent('SCREENSHOT_ATTEMPT_THRESHOLD', '多次截屏尝试触发警告');
            }
            
            return false;
        }
    });
    
    // 右键菜单保护
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        logSecurityEvent('CONTEXT_MENU_BLOCKED', '阻止右键菜单');
        return false;
    });
    
    // 文本选择保护
    document.addEventListener('selectstart', function(e) {
        if (e.target.classList.contains('sensitive-data')) {
            e.preventDefault();
            return false;
        }
    });
    
    // 拖拽保护
    document.addEventListener('dragstart', function(e) {
        if (e.target.classList.contains('sensitive-data')) {
            e.preventDefault();
            return false;
        }
    });
    
    // 增强的开发者工具检测
    setInterval(() => {
        if (window.outerWidth - window.innerWidth > PRIVACY_CONFIG.DEVTOOLS_THRESHOLD || 
            window.outerHeight - window.innerHeight > PRIVACY_CONFIG.DEVTOOLS_THRESHOLD) {
            if (!devTools) {
                devTools = true;
                document.body.style.filter = 'blur(15px)';
                document.body.style.pointerEvents = 'none';
                logSecurityEvent('DEVTOOLS_DETECTED', '检测到开发者工具，内容已模糊处理');
                showNotification('检测到开发者工具，内容已保护', 'warning');
            }
        } else {
            if (devTools) {
                devTools = false;
                document.body.style.filter = 'none';
                document.body.style.pointerEvents = 'auto';
            }
        }
    }, PRIVACY_CONFIG.SCREEN_PROTECTION_INTERVAL);
    
    // 检测全屏状态变化
    document.addEventListener('fullscreenchange', function() {
        if (document.fullscreenElement) {
            logSecurityEvent('FULLSCREEN_ENTERED', '用户进入全屏模式');
        } else {
            logSecurityEvent('FULLSCREEN_EXITED', '用户退出全屏模式');
        }
    });
    
    // 检测页面可见性变化
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            logSecurityEvent('PAGE_HIDDEN', '页面被隐藏');
            // 可以在这里添加额外的保护措施
        } else {
            logSecurityEvent('PAGE_VISIBLE', '页面重新可见');
        }
    });
}

// 增强水印初始化
function initWatermarks() {
    updateQueryWatermark();
    enableScreenProtection();
    enableDataMasking();
    
    // 根据配置更新水印频率
    setInterval(updateQueryWatermark, PRIVACY_CONFIG.WATERMARK_UPDATE_INTERVAL);
    
    // 启动隐私保护监控
    startPrivacyMonitoring();
}

// 启动隐私保护监控
function startPrivacyMonitoring() {
    // 监控DOM变化，防止水印被移除
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        // 检查是否有移除水印的脚本
                        if (node.tagName === 'SCRIPT' && 
                            node.textContent.includes('watermark') && 
                            node.textContent.includes('remove')) {
                            logSecurityEvent('WATERMARK_TAMPERING_DETECTED', '检测到水印篡改尝试');
                            showNotification('检测到安全威胁，系统已记录', 'error');
                        }
                    }
                });
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // 定期检查水印完整性
    setInterval(() => {
        checkWatermarkIntegrity();
    }, 10000); // 每10秒检查一次
}

// 检查水印完整性
function checkWatermarkIntegrity() {
    const watermarks = document.querySelectorAll('.privacy-watermark, .verification-watermark, .screen-protect');
    if (watermarks.length < 3) {
        logSecurityEvent('WATERMARK_INTEGRITY_FAILED', '水印完整性检查失败');
        // 重新创建水印
        recreateWatermarks();
    }
}

// 重新创建水印
function recreateWatermarks() {
    logSecurityEvent('WATERMARK_RECREATED', '重新创建水印');
    updateQueryWatermark();
}

// 数据脱敏功能
function enableDataMasking() {
    // 为敏感数据添加保护类
    const sensitiveElements = document.querySelectorAll('[id*="phone"], [id*="email"], [id*="idCard"], [id*="securityCode"]');
    sensitiveElements.forEach(element => {
        element.classList.add('sensitive-data');
        
        // 添加点击显示/隐藏功能
        element.addEventListener('click', function() {
            toggleDataVisibility(this);
        });
        
        // 默认隐藏敏感信息
        maskSensitiveData(element);
    });
}

// 切换数据可见性
function toggleDataVisibility(element) {
    if (element.dataset.masked === 'true') {
        // 显示数据
        element.textContent = element.dataset.originalValue || element.textContent;
        element.dataset.masked = 'false';
        element.style.color = '#333';
        logSecurityEvent('SENSITIVE_DATA_REVEALED', `用户查看了敏感信息: ${element.id}`);
    } else {
        // 隐藏数据
        maskSensitiveData(element);
        logSecurityEvent('SENSITIVE_DATA_MASKED', `用户隐藏了敏感信息: ${element.id}`);
    }
}

// 隐藏敏感数据
function maskSensitiveData(element) {
    const originalValue = element.textContent;
    element.dataset.originalValue = originalValue;
    element.dataset.masked = 'true';
    
    if (element.id.includes('phone')) {
        element.textContent = maskPhone(originalValue);
    } else if (element.id.includes('email')) {
        element.textContent = maskEmail(originalValue);
    } else if (element.id.includes('idCard')) {
        element.textContent = maskIdCard(originalValue);
    } else if (element.id.includes('securityCode')) {
        element.textContent = maskSecurityCode(originalValue);
    }
    
    element.style.color = '#999';
    element.style.cursor = 'pointer';
    element.title = '点击查看完整信息';
}

// 手机号脱敏
function maskPhone(phone) {
    if (!phone || phone === '-') return '-';
    return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
}

// 邮箱脱敏
function maskEmail(email) {
    if (!email || email === '-') return '-';
    const [username, domain] = email.split('@');
    if (username.length <= 2) return email;
    return username.substring(0, 2) + '***@' + domain;
}

// 身份证脱敏
function maskIdCard(idCard) {
    if (!idCard || idCard === '-') return '-';
    return idCard.replace(/(\d{6})\d{8}(\d{4})/, '$1********$2');
}

// 安全码脱敏
function maskSecurityCode(code) {
    if (!code || code === '-') return '-';
    if (code.length <= 4) return code;
    return code.substring(0, 2) + '***' + code.substring(code.length - 2);
}

// 加载投档信息记录
function loadApplicationHistory(memberId) {
    const applicationHistory = document.getElementById('applicationHistory');
    if (!applicationHistory) return;
    
    const applications = applicationData[memberId] || [];
    
    if (applications.length === 0) {
        applicationHistory.innerHTML = '<div class="no-data">暂无投档记录</div>';
        return;
    }
    
    applicationHistory.innerHTML = applications.map(app => `
        <div class="application-item">
            <div class="application-header">
                <div class="application-date">${app.date}</div>
                <div class="application-status status-${getStatusClass(app.status)}">${app.status}</div>
            </div>
            <div class="application-content">
                <p><strong>投档岗位：</strong>${app.position}</p>
                <p><strong>投档部门：</strong>${app.department}</p>
                <p><strong>专业领域：</strong>${app.major}</p>
                <p><strong>岗位状态：</strong>${app.jobStatus}</p>
            </div>
        </div>
    `).join('');
}

// 获取状态对应的CSS类名
function getStatusClass(status) {
    switch (status) {
        case '录用':
            return 'employed';
        case '投档中':
            return 'applying';
        case '自由状态':
            return 'free';
        default:
            return 'default';
    }
}

// 在页面加载完成后初始化水印
window.addEventListener('load', function() {
    setTimeout(initWatermarks, 1000);
    
    // 启动网络活动监控
    startNetworkMonitoring();
    
    // 启动异常行为检测
    startAnomalyDetection();
});

// 在查询时更新水印
const originalDisplayMemberInfo = displayMemberInfo;
displayMemberInfo = function(member) {
    originalDisplayMemberInfo.call(this, member);
    updateQueryWatermark();
    
    // 记录查询行为
    logSecurityEvent('MEMBER_QUERIED', `查询成员信息: ${member.name} (${member.id})`);
};

// 网络活动监控
function startNetworkMonitoring() {
    // 监控XMLHttpRequest
    const originalXHR = window.XMLHttpRequest;
    window.XMLHttpRequest = function() {
        const xhr = new originalXHR();
        xhr.addEventListener('load', function() {
            logSecurityEvent('XHR_REQUEST', `XHR请求: ${this.responseURL}`);
        });
        return xhr;
    };
    
    // 监控Fetch API
    const originalFetch = window.fetch;
    window.fetch = function(...args) {
        logSecurityEvent('FETCH_REQUEST', `Fetch请求: ${args[0]}`);
        return originalFetch.apply(this, args);
    };
    
    // 监控WebSocket连接
    const originalWebSocket = window.WebSocket;
    window.WebSocket = function(url, protocols) {
        logSecurityEvent('WEBSOCKET_CONNECTION', `WebSocket连接: ${url}`);
        return new originalWebSocket(url, protocols);
    };
}

// 异常行为检测
function startAnomalyDetection() {
    let queryCount = 0;
    let lastQueryTime = 0;
    
    // 监控查询频率
    const originalSearchMember = window.searchMember;
    window.searchMember = function() {
        const now = Date.now();
        queryCount++;
        
        // 检测异常查询频率（每分钟超过10次）
        if (now - lastQueryTime < 60000 && queryCount > 10) {
            logSecurityEvent('ANOMALY_DETECTED', '检测到异常查询频率');
            showNotification('检测到异常查询行为，系统已记录', 'warning');
        }
        
        lastQueryTime = now;
        
        // 重置计数器
        setTimeout(() => {
            queryCount = 0;
        }, 60000);
        
        return originalSearchMember.apply(this, arguments);
    };
    
    // 监控页面焦点变化
    let focusTime = Date.now();
    let totalFocusTime = 0;
    
    document.addEventListener('focus', function() {
        focusTime = Date.now();
    });
    
    document.addEventListener('blur', function() {
        totalFocusTime += Date.now() - focusTime;
        
        // 检测异常使用时间（超过2小时）
        if (totalFocusTime > 7200000) {
            logSecurityEvent('ANOMALY_DETECTED', '检测到异常使用时间');
        }
    });
    
    // 监控鼠标移动模式
    let mouseMovements = [];
    document.addEventListener('mousemove', function(e) {
        mouseMovements.push({
            x: e.clientX,
            y: e.clientY,
            time: Date.now()
        });
        
        // 只保留最近100次移动
        if (mouseMovements.length > 100) {
            mouseMovements.shift();
        }
        
        // 检测机器人行为（过于规律的移动）
        if (mouseMovements.length >= 50) {
            const patterns = analyzeMousePatterns(mouseMovements);
            if (patterns.isRegular) {
                logSecurityEvent('ANOMALY_DETECTED', '检测到可能的机器人行为');
            }
        }
    });
}

// 分析鼠标移动模式
function analyzeMousePatterns(movements) {
    if (movements.length < 20) return { isRegular: false };
    
    const intervals = [];
    for (let i = 1; i < movements.length; i++) {
        intervals.push(movements[i].time - movements[i-1].time);
    }
    
    // 计算时间间隔的标准差
    const avg = intervals.reduce((a, b) => a + b, 0) / intervals.length;
    const variance = intervals.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / intervals.length;
    const stdDev = Math.sqrt(variance);
    
    // 如果标准差很小，说明移动过于规律
    return {
        isRegular: stdDev < 50, // 50ms阈值
        stdDev: stdDev,
        avgInterval: avg
    };
}

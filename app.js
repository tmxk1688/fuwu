// 天马行空创意团队个人档案书制作系统

// 检查必需的库是否已加载
function checkLibrariesLoaded() {
    console.log('检查必需的库加载状态...');
    
    const libraries = {
        'Bootstrap': typeof bootstrap !== 'undefined',
        'html2canvas': typeof html2canvas !== 'undefined',
        'jsPDF': typeof jsPDF !== 'undefined',
        'window.jsPDF': typeof window.jsPDF !== 'undefined',
        'jspdf': typeof jspdf !== 'undefined',
        'window.jspdf': typeof window.jspdf !== 'undefined'
    };
    
    console.log('库加载状态:', libraries);
    
    // 检查关键库
    const criticalLibraries = ['html2canvas'];
    const missingLibraries = criticalLibraries.filter(lib => !libraries[lib]);
    
    if (missingLibraries.length > 0) {
        console.error('缺少关键库:', missingLibraries);
        return false;
    }
    
    // 检查PDF库（至少需要一个）
    const pdfLibraries = ['jsPDF', 'window.jsPDF', 'jspdf', 'window.jspdf'];
    const hasPdfLibrary = pdfLibraries.some(lib => libraries[lib]);
    
    if (!hasPdfLibrary) {
        console.warn('未检测到PDF库，PDF功能可能不可用');
    } else {
        console.log('PDF库已加载');
    }
    
    return true;
}

// 登录验证逻辑
function initLogin() {
    console.log('开始初始化登录界面...');
    
    const loginScreen = document.getElementById('login-screen');
    const loginBtn = document.getElementById('login-btn');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('login-error');
    const correctPassword = 'tmxkcy.xyz';

    console.log('登录界面元素检查:', {
        loginScreen: !!loginScreen,
        loginBtn: !!loginBtn,
        passwordInput: !!passwordInput,
        loginError: !!loginError
    });

    // 确保登录界面显示
    if (loginScreen) {
        loginScreen.style.display = 'flex';
        console.log('登录界面已设置为显示');
    } else {
        console.error('找不到登录界面元素 #login-screen');
        return;
    }

    // 检查是否已经登录过
    if (localStorage.getItem('loggedIn') === 'true') {
        console.log('用户已登录，隐藏登录界面');
        if (loginScreen) {
            loginScreen.style.display = 'none';
        }
        return;
    }

    console.log('用户未登录，显示登录界面');

    // 登录按钮点击事件
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            console.log('登录按钮被点击');
            if (passwordInput.value === correctPassword) {
                console.log('密码正确，登录成功');
                // 密码正确，隐藏登录界面
                if (loginScreen) {
                    loginScreen.style.display = 'none';
                }
                // 保存登录状态
                localStorage.setItem('loggedIn', 'true');
                // 重新初始化系统
                if (window.personalFileSystem) {
                    window.personalFileSystem.init();
                }
            } else {
                console.log('密码错误，显示错误信息');
                // 密码错误，显示错误信息
                if (loginError) {
                    loginError.classList.remove('d-none');
                    // 3秒后隐藏错误信息
                    setTimeout(() => {
                        loginError.classList.add('d-none');
                    }, 3000);
                }
            }
        });
    } else {
        console.error('找不到登录按钮元素 #login-btn');
    }

    // 回车键登录
    if (passwordInput) {
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && loginBtn) {
                loginBtn.click();
            }
        });
    } else {
        console.error('找不到密码输入框元素 #password');
    }
    
    console.log('登录界面初始化完成');
}

// 页面加载完成后初始化登录
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM加载完成，开始初始化登录...');
    initLogin();
});

// 确保在页面完全加载后也执行一次
window.addEventListener('load', () => {
    console.log('页面完全加载完成，再次检查登录状态...');
    // 如果登录界面仍然没有显示，强制显示
    const loginScreen = document.getElementById('login-screen');
    if (loginScreen && localStorage.getItem('loggedIn') !== 'true') {
        loginScreen.style.display = 'flex';
        console.log('强制显示登录界面');
    }
});

class PersonalFileSystem {
    constructor() {
        this.currentPage = 1;
        this.totalPages = 8;
        this.fileData = {
            basicInfo: {},
            healthRecord: {},
            examRecords: [],
            learningRecords: [],
            personalIntro: {},
            teamAssessment: {}
        };
        this.teamMemberId = this.generateTeamMemberId();
        this.fileCode = this.generateFileCode();
        
        // 延迟初始化，确保DOM完全加载
        setTimeout(() => {
            this.init();
        }, 100);
    }

    // 初始化系统
    init() {
        // 检查是否已经登录
        if (localStorage.getItem('loggedIn') !== 'true') {
            console.log('用户未登录，系统初始化被阻止');
            return; // 如果未登录，不初始化系统
        }
        
        console.log('开始初始化系统...');
        
        try {
            this.generateBasicInfoForm();
            this.generateHealthRecordForm();
            this.generateExamRecordsForm();
            this.generateLearningRecordsForm();
            this.generatePersonalIntroForm();
            this.generateTeamAssessmentForm();
            this.bindEvents();
            this.loadData();
            console.log('系统初始化完成');
        } catch (error) {
            console.error('系统初始化失败:', error);
        }
    }

    // 生成团队成员编号
    generateTeamMemberId() {
        const timestamp = Date.now().toString().slice(-8);
        const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
        return `TM${timestamp}${random}`;
    }

    // 生成档案编码
    generateFileCode() {
        const timestamp = Date.now().toString().slice(-10);
        const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        return `PF${timestamp}${random}`;
    }

    // 绑定事件
    bindEvents() {
        try {
            // 导航链接点击事件
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });

            // 档案书相关按钮事件
            const generateBookBtn = document.getElementById('generate-book');
            const downloadPdfBtn = document.getElementById('download-pdf');
            const printBookBtn = document.getElementById('print-book');
            const prevPageBtn = document.getElementById('prev-page');
            const nextPageBtn = document.getElementById('next-page');

            if (generateBookBtn) {
                generateBookBtn.addEventListener('click', () => this.generateBook());
            }
            if (downloadPdfBtn) {
                downloadPdfBtn.addEventListener('click', () => this.downloadPDF());
            }
            if (printBookBtn) {
                printBookBtn.addEventListener('click', () => this.printBook());
            }
            if (prevPageBtn) {
                prevPageBtn.addEventListener('click', () => this.prevPage());
            }
            if (nextPageBtn) {
                nextPageBtn.addEventListener('click', () => this.nextPage());
            }

            // 表单提交事件
            const basicInfoForm = document.getElementById('basic-info-form');
            const healthRecordForm = document.getElementById('health-record-form');
            const examRecordsForm = document.getElementById('exam-records-form');
            const learningRecordsForm = document.getElementById('learning-records-form');
            const personalIntroForm = document.getElementById('personal-intro-form');
            const teamAssessmentForm = document.getElementById('team-assessment-form');

            if (basicInfoForm) {
                basicInfoForm.addEventListener('submit', (e) => this.handleFormSubmit(e, 'basicInfo'));
            }
            if (healthRecordForm) {
                healthRecordForm.addEventListener('submit', (e) => this.handleFormSubmit(e, 'healthRecord'));
            }
            if (examRecordsForm) {
                examRecordsForm.addEventListener('submit', (e) => this.handleFormSubmit(e, 'examRecords'));
            }
            if (learningRecordsForm) {
                learningRecordsForm.addEventListener('submit', (e) => this.handleFormSubmit(e, 'learningRecords'));
            }
            if (personalIntroForm) {
                personalIntroForm.addEventListener('submit', (e) => this.handleFormSubmit(e, 'personalIntro'));
            }
            if (teamAssessmentForm) {
                teamAssessmentForm.addEventListener('submit', (e) => this.handleFormSubmit(e, 'teamAssessment'));
            }

            // 照片上传事件
            this.bindPhotoUploadEvents();
            
            // 签名事件
            this.bindSignatureEvents();
            
            console.log('事件绑定完成');
        } catch (error) {
            console.error('事件绑定失败:', error);
        }
    }

    // 生成基本信息表单
    generateBasicInfoForm() {
        const form = document.getElementById('basic-info-form');
        form.innerHTML = `
            <div class="row">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">姓名 *</label>
                        <input type="text" class="form-control" name="name" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">工号</label>
                        <input type="text" class="form-control" name="employeeId" value="${this.teamMemberId}" readonly>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">个人照片 *</label>
                        <div class="photo-upload" id="photo-upload">
                            <i class="fas fa-camera fa-2x text-muted"></i>
                            <p class="mt-2">点击上传照片</p>
                            <input type="file" id="photo-input" accept="image/*" style="display: none;">
                        </div>
                        <img id="photo-preview" class="photo-preview">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">性别 *</label>
                        <select class="form-control" name="gender" required>
                            <option value="">请选择</option>
                            <option value="男">男</option>
                            <option value="女">女</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">民族</label>
                        <input type="text" class="form-control" name="ethnicity">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">出生年月 *</label>
                        <input type="date" class="form-control" name="birthDate" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">联系电话 *</label>
                        <input type="tel" class="form-control" name="phone" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">职业</label>
                        <input type="text" class="form-control" name="profession">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">籍贯</label>
                        <input type="text" class="form-control" name="hometown">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">所属团队 *</label>
                        <input type="text" class="form-control" name="team" value="天马行空创意团队" readonly>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">居民身份证号码 *</label>
                        <input type="text" class="form-control" name="idCard" required>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="mb-3">
                        <label class="form-label">身份卡信息</label>
                        <textarea class="form-control" name="idCardInfo" rows="3" placeholder="请填写身份卡相关信息"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">本人经历</label>
                        <textarea class="form-control" name="experience" rows="4" placeholder="请填写个人工作、学习经历"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">兴趣爱好及获得奖项</label>
                        <textarea class="form-control" name="hobbiesAwards" rows="4" placeholder="请填写个人兴趣爱好和获得的奖项"></textarea>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary btn-lg">保存基本信息</button>
            </div>
        `;
    }

    // 生成体质健康标准登记表单
    generateHealthRecordForm() {
        const form = document.getElementById('health-record-form');
        form.innerHTML = `
            <div class="row">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">身高 (cm)</label>
                        <input type="number" class="form-control" name="height" min="100" max="250">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">体重 (kg)</label>
                        <input type="number" class="form-control" name="weight" min="30" max="200" step="0.1">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">血压 (mmHg)</label>
                        <div class="row">
                            <div class="col-6">
                                <input type="number" class="form-control" name="systolic" placeholder="收缩压">
                            </div>
                            <div class="col-6">
                                <input type="number" class="form-control" name="diastolic" placeholder="舒张压">
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">心率 (次/分)</label>
                        <input type="number" class="form-control" name="heartRate" min="40" max="200">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">视力 (左眼)</label>
                        <input type="text" class="form-control" name="leftEyeVision" placeholder="如：5.0">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">视力 (右眼)</label>
                        <input type="text" class="form-control" name="rightEyeVision" placeholder="如：5.0">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">血型</label>
                        <select class="form-control" name="bloodType">
                            <option value="">请选择</option>
                            <option value="A型">A型</option>
                            <option value="B型">B型</option>
                            <option value="AB型">AB型</option>
                            <option value="O型">O型</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">过敏史</label>
                        <textarea class="form-control" name="allergies" rows="3" placeholder="请填写过敏史，如无请填写'无'"></textarea>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="mb-3">
                        <label class="form-label">体检日期</label>
                        <input type="date" class="form-control" name="examDate">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">体检医院</label>
                        <input type="text" class="form-control" name="examHospital">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">体检结果</label>
                        <textarea class="form-control" name="examResult" rows="4" placeholder="请填写体检结果和医生建议"></textarea>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary btn-lg">保存健康记录</button>
            </div>
        `;
    }

    // 生成成绩登记与考试项目表单
    generateExamRecordsForm() {
        const form = document.getElementById('exam-records-form');
        form.innerHTML = `
            <div class="row">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">考试项目 *</label>
                        <input type="text" class="form-control" name="examSubject" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">考试成绩</label>
                        <input type="text" class="form-control" name="examScore" placeholder="如：85分 或 优秀">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">考试日期</label>
                        <input type="date" class="form-control" name="examDate">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">考试过程中照片</label>
                        <div class="photo-upload" id="exam-photo-upload">
                            <i class="fas fa-camera fa-2x text-muted"></i>
                            <p class="mt-2">点击上传考试照片</p>
                            <input type="file" id="exam-photo-input" accept="image/*" style="display: none;">
                        </div>
                        <img id="exam-photo-preview" class="photo-preview">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">考试地点</label>
                        <input type="text" class="form-control" name="examLocation">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">考试类型</label>
                        <select class="form-control" name="examType">
                            <option value="">请选择</option>
                            <option value="理论考试">理论考试</option>
                            <option value="实践考试">实践考试</option>
                            <option value="综合考试">综合考试</option>
                            <option value="技能考核">技能考核</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="mb-3">
                        <label class="form-label">考试说明</label>
                        <textarea class="form-control" name="examDescription" rows="3" placeholder="请填写考试相关说明"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">本人签名</label>
                        <canvas class="signature-pad" id="signature-pad" width="400" height="150"></canvas>
                        <input type="hidden" name="signature" id="signature-data">
                        <div class="mt-2">
                            <button type="button" class="btn btn-secondary btn-sm" onclick="personalFileSystem.clearSignature()">清除签名</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary btn-lg">保存考试记录</button>
            </div>
            <div class="mt-4">
                <h5>已保存的考试记录</h5>
                <div id="exam-records-list"></div>
            </div>
        `;
    }

    // 生成学习记录表单
    generateLearningRecordsForm() {
        const form = document.getElementById('learning-records-form');
        form.innerHTML = `
            <div class="row">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">学习内容 *</label>
                        <input type="text" class="form-control" name="learningContent" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">学习时间</label>
                        <input type="date" class="form-control" name="learningDate">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">学习时长 (小时)</label>
                        <input type="number" class="form-control" name="learningDuration" min="0.5" max="24" step="0.5">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">学习方式</label>
                        <select class="form-control" name="learningMethod">
                            <option value="">请选择</option>
                            <option value="自学">自学</option>
                            <option value="培训">培训</option>
                            <option value="实践">实践</option>
                            <option value="在线学习">在线学习</option>
                            <option value="团队讨论">团队讨论</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">学习成果</label>
                        <select class="form-control" name="learningOutcome">
                            <option value="">请选择</option>
                            <option value="优秀">优秀</option>
                            <option value="良好">良好</option>
                            <option value="合格">合格</option>
                            <option value="需改进">需改进</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">学习地点</label>
                        <input type="text" class="form-control" name="learningLocation">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="mb-3">
                        <label class="form-label">学习笔记</label>
                        <textarea class="form-control" name="learningNotes" rows="4" placeholder="请填写学习过程中的重要笔记"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">学习收获</label>
                        <textarea class="form-control" name="learningGains" rows="4" placeholder="请填写本次学习的主要收获"></textarea>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary btn-lg">保存学习记录</button>
            </div>
            <div class="mt-4">
                <h5>已保存的学习记录</h5>
                <div id="learning-records-list"></div>
            </div>
        `;
    }

    // 生成个人介绍与团队思想表单
    generatePersonalIntroForm() {
        const form = document.getElementById('personal-intro-form');
        form.innerHTML = `
            <div class="row">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">个人特长</label>
                        <textarea class="form-control" name="personalStrengths" rows="4" placeholder="请填写个人特长和技能"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">职业规划</label>
                        <textarea class="form-control" name="careerPlan" rows="4" placeholder="请填写个人职业发展规划"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">个人座右铭</label>
                        <input type="text" class="form-control" name="personalMotto" placeholder="请填写个人座右铭">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">团队合作理念</label>
                        <textarea class="form-control" name="teamCooperation" rows="4" placeholder="请填写对团队合作的理解和理念"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">创新思维</label>
                        <textarea class="form-control" name="innovativeThinking" rows="4" placeholder="请填写对创新思维的理解和实践"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">团队贡献</label>
                        <textarea class="form-control" name="teamContribution" rows="4" placeholder="请填写为团队做出的贡献"></textarea>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="mb-3">
                        <label class="form-label">个人介绍</label>
                        <textarea class="form-control" name="personalIntroduction" rows="6" placeholder="请填写详细的个人介绍，包括性格特点、工作风格等"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">团队思想</label>
                        <textarea class="form-control" name="teamPhilosophy" rows="6" placeholder="请填写对团队文化的理解和认同，以及如何践行团队价值观"></textarea>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary btn-lg">保存个人介绍</button>
            </div>
        `;
    }

    // 生成团队岗位考察表单
    generateTeamAssessmentForm() {
        const form = document.getElementById('team-assessment-form');
        form.innerHTML = `
            <div class="row">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">当前岗位</label>
                        <input type="text" class="form-control" name="currentPosition">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">岗位职责</label>
                        <textarea class="form-control" name="positionDuties" rows="4" placeholder="请填写当前岗位的主要职责"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">工作表现评分 (1-10分)</label>
                        <input type="number" class="form-control" name="workPerformance" min="1" max="10">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">团队协作能力 (1-10分)</label>
                        <input type="number" class="form-control" name="teamworkAbility" min="1" max="10">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">创新能力评分 (1-10分)</label>
                        <input type="number" class="form-control" name="innovationAbility" min="1" max="10">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">学习能力评分 (1-10分)</label>
                        <input type="number" class="form-control" name="learningAbility" min="1" max="10">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                        <div class="row">
                <div class="col-12">
                    <div class="mb-3">
                        <label class="form-label">岗位胜任度评估</label>
                        <textarea class="form-control" name="positionCompetency" rows="4" placeholder="请填写对当前岗位的胜任度评估"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">发展建议</label>
                        <textarea class="form-control" name="developmentSuggestions" rows="4" placeholder="请填写对个人发展的建议"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">考察日期</label>
                        <input type="date" class="form-control" name="assessmentDate">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">考察人员</label>
                        <input type="text" class="form-control" name="assessor" placeholder="请填写考察人员姓名">
                    </div>
                </div>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary btn-lg">保存团队考察</button>
            </div>
        `;
    }

    // 绑定照片上传事件
    bindPhotoUploadEvents() {
        // 个人照片上传
        const photoUpload = document.getElementById('photo-upload');
        const photoInput = document.getElementById('photo-input');
        const photoPreview = document.getElementById('photo-preview');

        if (photoUpload && photoInput && photoPreview) {
            photoUpload.addEventListener('click', () => photoInput.click());
            photoInput.addEventListener('change', (e) => this.handlePhotoUpload(e, photoPreview));
        }

        // 考试照片上传
        const examPhotoUpload = document.getElementById('exam-photo-upload');
        const examPhotoInput = document.getElementById('exam-photo-input');
        const examPhotoPreview = document.getElementById('exam-photo-preview');

        if (examPhotoUpload && examPhotoInput && examPhotoPreview) {
            examPhotoUpload.addEventListener('click', () => examPhotoInput.click());
            examPhotoInput.addEventListener('change', (e) => this.handlePhotoUpload(e, examPhotoPreview));
        }
    }

    // 处理照片上传
    handlePhotoUpload(event, previewElement) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewElement.src = e.target.result;
                previewElement.style.display = 'block';
                
                // 保存照片数据到fileData
                if (previewElement.id === 'photo-preview') {
                    this.fileData.basicInfo.photo = e.target.result;
                } else if (previewElement.id === 'exam-photo-preview') {
                    // 为当前考试记录添加照片
                    const examRecordsForm = document.getElementById('exam-records-form');
                    if (examRecordsForm) {
                        // 获取当前表单中的考试科目，用于查找对应的记录
                        const examSubject = examRecordsForm.querySelector('[name="examSubject"]').value;
                        if (examSubject && this.fileData.examRecords.length > 0) {
                            // 假设是最后添加的记录
                            const lastRecord = this.fileData.examRecords[this.fileData.examRecords.length - 1];
                            if (lastRecord.examSubject === examSubject) {
                                lastRecord.photo = e.target.result;
                                this.saveData();
                            }
                        }
                    }
                }
            };
            reader.readAsDataURL(file);
        }
    }

    // 绑定签名事件
    bindSignatureEvents() {
        const signaturePad = document.getElementById('signature-pad');
        if (signaturePad && signaturePad.tagName === 'CANVAS') {
            let isDrawing = false;
            let context = signaturePad.getContext('2d');
            
            // 设置画布样式
            context.strokeStyle = '#000';
            context.lineWidth = 2;
            context.lineCap = 'round';

            signaturePad.addEventListener('mousedown', (e) => {
                isDrawing = true;
                context.beginPath();
                context.moveTo(e.offsetX, e.offsetY);
            });

            signaturePad.addEventListener('mousemove', (e) => {
                if (isDrawing) {
                    context.lineTo(e.offsetX, e.offsetY);
                    context.stroke();
                }
            });

            signaturePad.addEventListener('mouseup', () => {
                isDrawing = false;
                this.saveSignature();
            });

            signaturePad.addEventListener('mouseleave', () => {
                isDrawing = false;
            });
        }
    }

    // 保存签名
    saveSignature() {
        const signaturePad = document.getElementById('signature-pad');
        const signatureData = document.getElementById('signature-data');
        if (signaturePad && signatureData) {
            signatureData.value = signaturePad.toDataURL();
        }
    }

    // 清除签名
    clearSignature() {
        const signaturePad = document.getElementById('signature-pad');
        const signatureData = document.getElementById('signature-data');
        if (signaturePad && signatureData) {
            const context = signaturePad.getContext('2d');
            context.clearRect(0, 0, signaturePad.width, signaturePad.height);
            signatureData.value = '';
        }
    }

    // 处理表单提交
    handleFormSubmit(event, formType) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = {};

        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }

        if (formType === 'examRecords') {
            this.fileData[formType].push(data);
            this.updateExamRecordsList();
        } else if (formType === 'learningRecords') {
            this.fileData[formType].push(data);
            this.updateLearningRecordsList();
        } else {
            this.fileData[formType] = data;
        }

        this.saveData();
        this.showSuccessMessage(`${this.getFormTypeName(formType)}保存成功！`);
    }

    // 获取表单类型名称
    getFormTypeName(formType) {
        const names = {
            basicInfo: '基本信息',
            healthRecord: '健康记录',
            examRecords: '考试记录',
            learningRecords: '学习记录',
            personalIntro: '个人介绍',
            teamAssessment: '团队考察'
        };
        return names[formType] || '信息';
    }

    // 更新考试记录列表
    updateExamRecordsList() {
        const listContainer = document.getElementById('exam-records-list');
        if (listContainer) {
            listContainer.innerHTML = this.fileData.examRecords.map((record, index) => `
                <div class="card mb-2">
                    <div class="card-body">
                        <h6 class="card-title">${record.examSubject}</h6>
                        <p class="card-text">成绩：${record.examScore} | 日期：${record.examDate} | 类型：${record.examType || '无'}</p>
                        <p class="card-text">地点：${record.examLocation || '无'} | 说明：${record.examDescription || '无'}</p>
                        <button class="btn btn-danger btn-sm" onclick="personalFileSystem.deleteExamRecord(${index})">删除</button>
                    </div>
                </div>
            `).join('');
        }
    }

    // 更新学习记录列表
    updateLearningRecordsList() {
        const listContainer = document.getElementById('learning-records-list');
        if (listContainer) {
            listContainer.innerHTML = this.fileData.learningRecords.map((record, index) => `
                <div class="card mb-2">
                    <div class="card-body">
                        <h6 class="card-title">${record.learningContent}</h6>
                        <p class="card-text">时长：${record.learningDuration}小时 | 成果：${record.learningOutcome} | 方式：${record.learningMethod}</p>
                        <p class="card-text">时间：${record.learningDate} | 地点：${record.learningLocation || '无'}</p>
                        <button class="btn btn-danger btn-sm" onclick="personalFileSystem.deleteLearningRecord(${index})">删除</button>
                    </div>
                </div>
            `).join('');
        }
    }

    // 删除考试记录
    deleteExamRecord(index) {
        this.fileData.examRecords.splice(index, 1);
        this.updateExamRecordsList();
        this.saveData();
    }

    // 删除学习记录
    deleteLearningRecord(index) {
        this.fileData.learningRecords.splice(index, 1);
        this.updateLearningRecordsList();
        this.saveData();
    }

    // 生成档案书
    generateBook() {
        const bookPreview = document.getElementById('book-preview');
        const bookContainer = bookPreview.querySelector('.book-container');
        
        bookContainer.innerHTML = this.generateBookPages();
        bookPreview.classList.remove('d-none');
        
        // 重置到第一页
        this.currentPage = 1;
        this.updatePageDisplay();
        
        this.showSuccessMessage('档案书生成成功！');
    }

    // 生成档案书页面
    generateBookPages() {
        let pagesHTML = '';
        
        for (let i = 1; i <= this.totalPages; i++) {
            pagesHTML += `
                <div class="book-page ${i === 1 ? 'active' : ''}" id="page-${i}" style="display: ${i === 1 ? 'block' : 'none'};">
                    ${this.generatePageContent(i)}
                </div>
            `;
        }
        
        return pagesHTML;
    }

    // 生成页面内容
    generatePageContent(pageNum) {
        const basicInfo = this.fileData.basicInfo;
        const healthRecord = this.fileData.healthRecord;
        const examRecords = this.fileData.examRecords;
        const learningRecords = this.fileData.learningRecords;
        const personalIntro = this.fileData.personalIntro;
        const teamAssessment = this.fileData.teamAssessment;

        switch (pageNum) {
            case 1:
                return `
                    <div class="page-header">
                        <h2>天马行空创意团队</h2>
                        <h3>个人档案书</h3>
                        <p>档案编码：${this.fileCode}</p>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            ${basicInfo.photo ? `<img src="${basicInfo.photo}" alt="个人照片" class="profile-photo" />` : '<div class="no-photo">无照片</div>'}
                        </div>
                        <div class="col-8">
                            <table class="table table-bordered table-striped professional-table">
                                <tbody>
                                    <tr><th>姓名</th><td>${basicInfo.name || '待填写'}</td><th>工号</th><td>${basicInfo.employeeId || this.teamMemberId}</td></tr>
                                    <tr><th>性别</th><td>${basicInfo.gender || '待填写'}</td><th>民族</th><td>${basicInfo.ethnicity || '待填写'}</td></tr>
                                    <tr><th>出生年月</th><td>${basicInfo.birthDate || '待填写'}</td><th>联系电话</th><td>${basicInfo.phone || '待填写'}</td></tr>
                                    <tr><th>职业</th><td>${basicInfo.profession || '待填写'}</td><th>籍贯</th><td>${basicInfo.hometown || '待填写'}</td></tr>
                                    <tr><th>所属团队</th><td colspan="3">${basicInfo.team || '天马行空创意团队'}</td></tr>
                                    <tr><th>身份证号</th><td colspan="3">${basicInfo.idCard || '待填写'}</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="page-footer">
                        <p>个人档案书说明：本档案书记录了团队成员的基本信息、健康状况、学习成果等，是团队管理的重要依据。</p>
                    </div>
                `;
            case 2:
                return `
                    <div class="page-header">
                        <h3>基本信息（续）</h3>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <table class="table table-bordered table-striped professional-table">
                                <tbody>
                                    <tr><th>身份卡信息</th><td colspan="3">${basicInfo.idCardInfo || '待填写'}</td></tr>
                                    <tr><th>本人经历</th><td colspan="3">${basicInfo.experience || '待填写'}</td></tr>
                                    <tr><th>兴趣爱好及获得奖项</th><td colspan="3">${basicInfo.hobbiesAwards || '待填写'}</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="page-footer">
                        <p>第2页 - 基本信息详细记录</p>
                    </div>
                `;
            case 3:
                return `
                    <div class="page-header">
                        <h3>体质健康标准登记</h3>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <table class="table table-bordered table-striped professional-table">
                                <tbody>
                                    <tr><th>身高</th><td>${healthRecord.height || '待填写'} cm</td><th>体重</th><td>${healthRecord.weight || '待填写'} kg</td></tr>
                                    <tr><th>血压</th><td>${healthRecord.systolic || '待填写'}/${healthRecord.diastolic || '待填写'} mmHg</td><th>心率</th><td>${healthRecord.heartRate || '待填写'} 次/分</td></tr>
                                    <tr><th>左眼视力</th><td>${healthRecord.leftEyeVision || '待填写'}</td><th>右眼视力</th><td>${healthRecord.rightEyeVision || '待填写'}</td></tr>
                                    <tr><th>血型</th><td>${healthRecord.bloodType || '待填写'}</td><th>过敏史</th><td>${healthRecord.allergies || '待填写'}</td></tr>
                                    <tr><th>体检结果</th><td colspan="3">${healthRecord.examResult || '待填写'}</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="page-footer">
                        <p>第3页 - 体质健康记录</p>
                    </div>
                `;
            case 4:
                return `
                    <div class="page-header">
                        <h3>成绩登记与考试项目</h3>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            ${examRecords.length > 0 ? `
                                <table class="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>考试科目</th>
                                            <th>成绩</th>
                                            <th>日期</th>
                                            <th>类型</th>
                                            <th>照片</th>
                                            <th>说明</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${examRecords.map(record => `
                                            <tr>
                                                <td>${record.examSubject}</td>
                                                <td>${record.examScore}</td>
                                                <td>${record.examDate}</td>
                                                <td>${record.examType}</td>
                                                <td>${record.photo ? `<img src="${record.photo}" alt="${record.examSubject}考试照片" class="exam-photo-table" />` : '无'}</td>
                                                <td>${record.examDescription || '无'}</td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            ` : '<p>暂无考试记录</p>'}
                        </div>
                    </div>
                    <div class="page-footer">
                        <p>第4页 - 考试成绩记录</p>
                    </div>
                `;
            case 5:
                return `
                    <div class="page-header">
                        <h3>学习记录</h3>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            ${learningRecords.length > 0 ? `
                                <table class="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>学习内容</th>
                                            <th>时长(小时)</th>
                                            <th>学习方式</th>
                                            <th>学习成果</th>
                                            <th>收获</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${learningRecords.map(record => `
                                            <tr>
                                                <td>${record.learningContent}</td>
                                                <td>${record.learningDuration}</td>
                                                <td>${record.learningMethod}</td>
                                                <td>${record.learningOutcome}</td>
                                                <td>${record.learningGains || '无'}</td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            ` : '<p>暂无学习记录</p>'}
                        </div>
                    </div>
                    <div class="page-footer">
                        <p>第5页 - 学习记录详情</p>
                    </div>
                `;
            case 6:
                return `
                    <div class="page-header">
                        <h3>个人介绍与团队思想</h3>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <table class="table table-bordered table-striped professional-table">
                                <tbody>
                                    <tr><th>个人特长</th><td colspan="3">${personalIntro.personalStrengths || '待填写'}</td></tr>
                                    <tr><th>职业规划</th><td colspan="3">${personalIntro.careerPlan || '待填写'}</td></tr>
                                    <tr><th>个人座右铭</th><td colspan="3">${personalIntro.personalMotto || '待填写'}</td></tr>
                                    <tr><th>团队合作理念</th><td colspan="3">${personalIntro.teamCooperation || '待填写'}</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="page-footer">
                        <p>第6页 - 个人介绍与思想</p>
                    </div>
                `;
            case 7:
                return `
                    <div class="page-header">
                        <h3>个人介绍与团队思想（续）</h3>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <table class="table table-bordered table-striped professional-table">
                                <tbody>
                                    <tr><th>创新思维</th><td colspan="3">${personalIntro.innovativeThinking || '待填写'}</td></tr>
                                    <tr><th>团队贡献</th><td colspan="3">${personalIntro.teamContribution || '待填写'}</td></tr>
                                    <tr><th>个人介绍</th><td colspan="3">${personalIntro.personalIntroduction || '待填写'}</td></tr>
                                    <tr><th>团队思想</th><td colspan="3">${personalIntro.teamPhilosophy || '待填写'}</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="page-footer">
                        <p>第7页 - 个人介绍续</p>
                    </div>
                `;
            case 8:
                return `
                    <div class="page-header">
                        <h3>团队岗位考察</h3>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <table class="table table-bordered table-striped professional-table">
                                <tbody>
                                    <tr><th>当前岗位</th><td>${teamAssessment.currentPosition || '待填写'}</td><th>工作表现评分</th><td>${teamAssessment.workPerformance || '待填写'}/10分</td></tr>
                                    <tr><th>团队协作能力</th><td>${teamAssessment.teamworkAbility || '待填写'}/10分</td><th>创新能力评分</th><td>${teamAssessment.innovationAbility || '待填写'}/10分</td></tr>
                                    <tr><th>学习能力评分</th><td>${teamAssessment.learningAbility || '待填写'}/10分</td><th>考察日期</th><td>${teamAssessment.assessmentDate || '待填写'}</td></tr>
                                    <tr><th>考察人员</th><td colspan="3">${teamAssessment.assessor || '待填写'}</td></tr>
                                    <tr><th>岗位职责</th><td colspan="3">${teamAssessment.positionDuties || '待填写'}</td></tr>
                                    <tr><th>岗位胜任度评估</th><td colspan="3">${teamAssessment.positionCompetency || '待填写'}</td></tr>
                                    <tr><th>发展建议</th><td colspan="3">${teamAssessment.developmentSuggestions || '待填写'}</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="page-footer">
                        <p>第8页 - 团队岗位考察记录 | 档案书生成完成</p>
                    </div>
                `;
            default:
                return '<p>页面内容生成中...</p>';
        }
    }

    // 上一页
    prevPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.updatePageDisplay();
        }
    }

    // 下一页
    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.updatePageDisplay();
        }
    }

    // 更新页面显示
    updatePageDisplay() {
        // 隐藏所有页面
        document.querySelectorAll('.book-page').forEach(page => {
            page.style.display = 'none';
            page.classList.remove('active');
        });

        // 显示当前页面
        const currentPageElement = document.getElementById(`page-${this.currentPage}`);
        if (currentPageElement) {
            currentPageElement.style.display = 'block';
            currentPageElement.classList.add('active');
        }

        // 更新页码信息
        const pageInfo = document.getElementById('page-info');
        if (pageInfo) {
            pageInfo.textContent = `第 ${this.currentPage} 页 / 共 ${this.totalPages} 页`;
        }

        // 更新按钮状态
        const prevBtn = document.getElementById('prev-page');
        const nextBtn = document.getElementById('next-page');
        if (prevBtn) prevBtn.disabled = this.currentPage === 1;
        if (nextBtn) nextBtn.disabled = this.currentPage === this.totalPages;
    }

    async downloadPDF() {
        try {
            // 检查jsPDF库是否可用 - 支持多种加载方式和版本
            let jsPDFClass = null;
            let jsPDFVersion = 'unknown';
            
            // 检查全局jsPDF (1.x版本)
            if (typeof jsPDF !== 'undefined') {
                jsPDFClass = jsPDF;
                jsPDFVersion = '1.x';
                console.log('使用全局jsPDF库 (1.x版本)');
            }
            // 检查window.jsPDF (1.x版本)
            else if (typeof window.jsPDF !== 'undefined') {
                jsPDFClass = window.jsPDF;
                jsPDFVersion = '1.x';
                console.log('使用window.jsPDF库 (1.x版本)');
            }
            // 检查jspdf命名空间 (2.x版本)
            else if (typeof jspdf !== 'undefined' && jspdf.jsPDF) {
                jsPDFClass = jspdf.jsPDF;
                jsPDFVersion = '2.x';
                console.log('使用jspdf命名空间下的jsPDF库 (2.x版本)');
            }
            // 检查UMD模块 (2.x版本)
            else if (typeof window !== 'undefined' && window.jspdf && window.jspdf.jsPDF) {
                jsPDFClass = window.jspdf.jsPDF;
                jsPDFVersion = '2.x';
                console.log('使用UMD模块下的jsPDF库 (2.x版本)');
            }
            
            if (!jsPDFClass) {
                console.error('jsPDF库未找到，可用的全局变量:', {
                    jsPDF: typeof jsPDF,
                    windowJsPDF: typeof window.jsPDF,
                    jspdf: typeof jspdf,
                    windowJspdf: typeof window.jspdf
                });
                this.showErrorMessage('PDF生成库未加载，请刷新页面重试！如果问题持续存在，请检查网络连接。');
                return;
            }

            console.log(`jsPDF库版本: ${jsPDFVersion}`);

            const bookPreview = document.getElementById('book-preview');
            if (!bookPreview || bookPreview.classList.contains('d-none')) {
                this.showErrorMessage('请先生成档案书！');
                return;
            }

            this.showSuccessMessage('正在生成PDF，请稍候...');

            // 获取所有页面
            const pages = document.querySelectorAll('.book-page');
            if (pages.length === 0) {
                this.showErrorMessage('没有找到档案书页面！');
                return;
            }

            // 使用找到的jsPDF类创建实例
            const pdf = new jsPDFClass('p', 'mm', 'a4');
            const imgWidth = 200;  // 稍微缩小宽度以留出边距
            const pageHeight = 297;
            const margin = 5;  // 添加边距

            // 遍历每个页面并添加到PDF
            for (let i = 0; i < pages.length; i++) {
                // 只显示当前页面
                pages.forEach(page => page.style.display = 'none');
                pages[i].style.display = 'block';
                pages[i].classList.add('active');

                // 等待页面渲染完成 - 增加等待时间以确保复杂页面正确渲染
                await new Promise(resolve => setTimeout(resolve, 1500));

                // 强制重排重绘
                void pages[i].offsetHeight;

                try {
                    // 生成当前页面的canvas
                    const canvas = await html2canvas(pages[i], {
                        scale: 2,
                        useCORS: true,
                        allowTaint: true,
                        windowWidth: pages[i].offsetWidth,
                        windowHeight: pages[i].offsetHeight
                    });

                    const imgData = canvas.toDataURL('image/png');
                    const imgHeight = (canvas.height * imgWidth) / canvas.width;

                    // 添加新页面（第一页不需要）
                    if (i > 0) {
                        pdf.addPage();
                    }

                    // 计算图像位置，考虑边距
                    const x = margin;
                    const y = margin;

                    // 如果图像高度超过页面高度，进行调整
                    let adjustedImgHeight = imgHeight;
                    if (imgHeight > pageHeight - 2 * margin) {
                        adjustedImgHeight = pageHeight - 2 * margin;
                        const scale = adjustedImgHeight / imgHeight;
                        const adjustedImgWidth = imgWidth * scale;
                        // 添加图像到PDF，居中显示
                        pdf.addImage(imgData, 'PNG', (imgWidth - adjustedImgWidth) / 2 + margin, y, adjustedImgWidth, adjustedImgHeight);
                    } else {
                        // 添加图像到PDF
                        pdf.addImage(imgData, 'PNG', x, y, imgWidth, adjustedImgHeight);
                    }

                    // 添加防伪水印到PDF页面
                    this.addWatermarkToPDF(pdf, i + 1, jsPDFVersion);
                } catch (pageError) {
                    console.error(`第${i + 1}页生成失败:`, pageError);
                    // 继续处理下一页
                }
            }

            // 恢复所有页面显示
            pages.forEach(page => {
                page.style.display = 'block';
                page.classList.remove('active');
            });
            pages[0].classList.add('active');

            pdf.save(`个人档案书_${this.fileCode}.pdf`);
            this.showSuccessMessage('PDF下载成功！');
        } catch (error) {
            console.error('PDF生成失败:', error);
            this.showErrorMessage(`PDF生成失败: ${error.message}`);
        }
    }

    // 为PDF页面添加防伪水印
    addWatermarkToPDF(pdf, pageNum, jsPDFVersion) {
        const pageWidth = 210; // A4宽度
        const pageHeight = 297; // A4高度
        
        // 设置水印文字样式
        pdf.setTextColor(200, 200, 200); // 浅灰色
        pdf.setFontSize(24);
        
        // 添加主要水印文字（居中，旋转45度）
        const watermarkText = `天马行空创意团队`;
        const fileCodeText = this.fileCode;
        
        // 计算文字位置（居中）
        const watermarkWidth = pdf.getTextWidth(watermarkText);
        const fileCodeWidth = pdf.getTextWidth(fileCodeText);
        
        // 根据jsPDF版本使用不同的API
        if (jsPDFVersion === '1.x') {
            // 1.x版本使用传统API
            try {
                // 保存当前状态
                if (typeof pdf.saveGraphicsState === 'function') {
                    pdf.saveGraphicsState();
                }
                
                // 移动到页面中心并旋转
                if (typeof pdf.translate === 'function') {
                    pdf.translate(pageWidth / 2, pageHeight / 2);
                }
                if (typeof pdf.rotate === 'function') {
                    pdf.rotate(-45);
                }
                
                // 绘制水印文字
                pdf.text(watermarkText, -watermarkWidth / 2, 0);
                pdf.text(fileCodeText, -fileCodeWidth / 2, 15);
                
                // 恢复状态
                if (typeof pdf.restoreGraphicsState === 'function') {
                    pdf.restoreGraphicsState();
                }
            } catch (error) {
                console.warn('1.x版本传统API失败，使用备用方案:', error);
                // 备用方案：直接绘制文字，不旋转
                const centerX = pageWidth / 2;
                const centerY = pageHeight / 2;
                pdf.text(watermarkText, centerX - watermarkWidth / 2, centerY);
                pdf.text(fileCodeText, centerX - fileCodeWidth / 2, centerY + 15);
            }
        } else {
            // 2.x版本使用新API
            try {
                const centerX = pageWidth / 2;
                const centerY = pageHeight / 2;
                
                // 尝试使用新版本的text方法
                if (typeof pdf.text === 'function') {
                    // 主要水印文字
                    pdf.text(watermarkText, centerX - watermarkWidth / 2, centerY, {
                        angle: -45,
                        align: 'center'
                    });
                    
                    // 文件代码
                    pdf.text(fileCodeText, centerX - fileCodeWidth / 2, centerY + 15, {
                        angle: -45,
                        align: 'center'
                    });
                }
            } catch (error) {
                console.warn('2.x版本新API失败，使用备用方案:', error);
                // 备用方案：直接绘制文字，不旋转
                const centerX = pageWidth / 2;
                const centerY = pageHeight / 2;
                pdf.text(watermarkText, centerX - watermarkWidth / 2, centerY);
                pdf.text(fileCodeText, centerX - fileCodeWidth / 2, centerY + 15);
            }
        }
        
        // 添加安全码（右上角）
        pdf.setTextColor(150, 150, 150);
        pdf.setFontSize(8);
        const securityCode = this.generateSecurityCode();
        pdf.text(securityCode, pageWidth - 25, 15);
        
        // 添加页码（右下角）
        pdf.text(`第 ${pageNum} 页 / 共 ${this.totalPages} 页`, pageWidth - 35, pageHeight - 10);
        
        // 重置文字颜色
        pdf.setTextColor(0, 0, 0);
    }

    // 打印档案书
    printBook() {
        const bookPreview = document.getElementById('book-preview');
        if (bookPreview.classList.contains('d-none')) {
            this.showErrorMessage('请先生成档案书！');
            return;
        }

        // 创建新窗口用于打印
        const printWindow = window.open('', '_blank');
        if (!printWindow) {
            alert('无法打开打印窗口，请检查浏览器设置');
            return;
        }

        // 构建打印页面HTML，包含所有页面内容和防伪水印
        const printHtml = `
            <!DOCTYPE html>
            <html lang="zh-CN">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>档案书打印 - ${this.fileCode}</title>
                <style>
                    @media print {
                        @page {
                            size: A4;
                            margin: 1cm;
                        }
                        body {
                            font-family: 'Microsoft YaHei', sans-serif;
                            line-height: 1.6;
                            margin: 0;
                            padding: 0;
                        }
                        .book-page {
                            page-break-after: always;
                            padding: 20px;
                            box-sizing: border-box;
                            height: 297mm;
                            width: 210mm;
                            background-color: white;
                            position: relative;
                        }
                        .book-page:last-child {
                            page-break-after: avoid;
                        }
                        .page-header {
                            text-align: center;
                            margin-bottom: 20px;
                            padding-bottom: 10px;
                            border-bottom: 1px solid #000;
                        }
                        .row {
                            display: flex;
                            margin-bottom: 10px;
                            flex-wrap: wrap;
                        }
                        .col-4 {
                            flex: 0 0 33.333%;
                            padding: 0 10px;
                            box-sizing: border-box;
                        }
                        .col-6 {
                            flex: 0 0 50%;
                            padding: 0 10px;
                            box-sizing: border-box;
                        }
                        .col-8 {
                            flex: 0 0 66.666%;
                            padding: 0 10px;
                            box-sizing: border-box;
                        }
                        .col-12 {
                            flex: 0 0 100%;
                            padding: 0 10px;
                            box-sizing: border-box;
                        }
                        .card {
                            margin-bottom: 15px;
                            border: 1px solid #ddd;
                            border-radius: 4px;
                            overflow: hidden;
                        }
                        .card-body {
                            padding: 15px;
                        }
                        .profile-photo {
                            max-width: 100%;
                            height: auto;
                            max-height: 150px;
                            display: block;
                            margin: 0 auto;
                            border: 1px solid #ddd;
                            padding: 5px;
                        }
                        .exam-photo-container {
                            margin: 10px 0;
                            text-align: center;
                        }
                        .exam-photo {
                            max-width: 300px;
                            height: auto;
                            max-height: 200px;
                            border: 1px solid #ddd;
                            padding: 5px;
                        }
                        .exam-photo-table {
                            max-width: 80px;
                            height: auto;
                            max-height: 60px;
                            border: 1px solid #ddd;
                            padding: 2px;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                            margin-bottom: 15px;
                        }
                        th, td {
                            border: 1px solid #000;
                            padding: 8px;
                            text-align: left;
                            vertical-align: top;
                        }
                        th {
                            background-color: #f2f2f2;
                            font-weight: bold;
                        }
                        tr:nth-child(even) {
                            background-color: #f9f9f9;
                        }
                        .table-striped tr:nth-child(odd) {
                            background-color: #f2f2f2;
                        }
                        .table-bordered {
                            border: 1px solid #000;
                        }
                        .table-bordered th, .table-bordered td {
                            border: 1px solid #000;
                        }
                        .no-photo {
                            text-align: center;
                            padding: 50px 0;
                            border: 1px dashed #ccc;
                            color: #999;
                        }
                        .page-footer {
                            text-align: center;
                            margin-top: 20px;
                            font-size: 12px;
                            color: #666;
                        }
                        /* 防伪水印样式 */
                        .watermark {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%) rotate(-45deg);
                            font-size: 48px;
                            color: rgba(0, 0, 0, 0.08);
                            font-weight: bold;
                            pointer-events: none;
                            z-index: 1000;
                            white-space: nowrap;
                            user-select: none;
                        }
                        .watermark-text {
                            font-size: 24px;
                            color: rgba(0, 0, 0, 0.06);
                        }
                        .page-number {
                            position: absolute;
                            bottom: 10px;
                            right: 20px;
                            font-size: 12px;
                            color: #666;
                        }
                        .security-code {
                            position: absolute;
                            top: 10px;
                            right: 20px;
                            font-size: 10px;
                            color: #999;
                            font-family: monospace;
                        }
                    }
                </style>
            </head>
            <body>
                ${this.generateAllPagesForPrint()}
                <script>
                    window.onload = function() {
                        // 确保所有图像都已加载完成
                        const images = document.querySelectorAll('img');
                        let imagesLoaded = 0;
                        
                        if (images.length === 0) {
                            window.print();
                            window.close();
                            return;
                        }
                        
                        images.forEach(img => {
                            img.onload = function() {
                                imagesLoaded++;
                                if (imagesLoaded === images.length) {
                                    window.print();
                                    window.close();
                                }
                            };
                            img.onerror = function() {
                                imagesLoaded++;
                                if (imagesLoaded === images.length) {
                                    window.print();
                                    window.close();
                                }
                            };
                        });
                    };
                </script>
            </body>
            </html>
        `;

        // 写入并加载打印页面
        printWindow.document.write(printHtml);
        printWindow.document.close();
    }

    // 为打印生成所有页面内容（包含防伪水印）
    generateAllPagesForPrint() {
        let allPagesHTML = '';
        
        for (let i = 1; i <= this.totalPages; i++) {
            const pageContent = this.generatePageContent(i);
            const watermarkText = `天马行空创意团队\n${this.fileCode}`;
            const securityCode = this.generateSecurityCode();
            
            allPagesHTML += `
                <div class="book-page" id="print-page-${i}">
                    <!-- 防伪水印 -->
                    <div class="watermark">
                        <div class="watermark-text">${watermarkText}</div>
                    </div>
                    
                    <!-- 安全码 -->
                    <div class="security-code">${securityCode}</div>
                    
                    <!-- 页面内容 -->
                    ${pageContent}
                    
                    <!-- 页码 -->
                    <div class="page-number">第 ${i} 页 / 共 ${this.totalPages} 页</div>
                </div>
            `;
        }
        
        return allPagesHTML;
    }

    // 生成防伪安全码
    generateSecurityCode() {
        const timestamp = Date.now();
        const random = Math.random().toString(36).substring(2, 8);
        const hash = this.simpleHash(`${this.fileCode}${timestamp}${random}`);
        return `SEC-${hash.substring(0, 8).toUpperCase()}`;
    }

    // 简单哈希函数
    simpleHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // 转换为32位整数
        }
        return Math.abs(hash).toString(16);
    }

    // 保存数据到本地存储
    saveData() {
        try {
            localStorage.setItem('personalFileData', JSON.stringify(this.fileData));
            localStorage.setItem('teamMemberId', this.teamMemberId);
            localStorage.setItem('fileCode', this.fileCode);
        } catch (error) {
            console.error('数据保存失败:', error);
        }
    }

    // 从本地存储加载数据
    loadData() {
        try {
            const savedData = localStorage.getItem('personalFileData');
            const savedTeamMemberId = localStorage.getItem('teamMemberId');
            const savedFileCode = localStorage.getItem('fileCode');

            if (savedData) {
                this.fileData = JSON.parse(savedData);
            }
            if (savedTeamMemberId) {
                this.teamMemberId = savedTeamMemberId;
            }
            if (savedFileCode) {
                this.fileCode = savedFileCode;
            }

            // 更新表单数据
            this.updateFormData();
        } catch (error) {
            console.error('数据加载失败:', error);
        }
    }

    // 更新表单数据
    updateFormData() {
        // 更新基本信息表单
        if (this.fileData.basicInfo) {
            Object.keys(this.fileData.basicInfo).forEach(key => {
                const input = document.querySelector(`[name="${key}"]`);
                if (input) {
                    input.value = this.fileData.basicInfo[key];
                }
            });
            
            // 更新照片预览
            if (this.fileData.basicInfo.photo) {
                const photoPreview = document.getElementById('photo-preview');
                if (photoPreview) {
                    photoPreview.src = this.fileData.basicInfo.photo;
                    photoPreview.style.display = 'block';
                }
            }
        }

        // 更新健康记录表单
        if (this.fileData.healthRecord) {
            Object.keys(this.fileData.healthRecord).forEach(key => {
                const input = document.querySelector(`[name="${key}"]`);
                if (input) {
                    input.value = this.fileData.healthRecord[key];
                }
            });
        }

        // 更新个人介绍表单
        if (this.fileData.personalIntro) {
            Object.keys(this.fileData.personalIntro).forEach(key => {
                const input = document.querySelector(`[name="${key}"]`);
                if (input) {
                    input.value = this.fileData.personalIntro[key];
                }
            });
        }

        // 更新团队考察表单
        if (this.fileData.teamAssessment) {
            Object.keys(this.fileData.teamAssessment).forEach(key => {
                const input = document.querySelector(`[name="${key}"]`);
                if (input) {
                    input.value = this.fileData.teamAssessment[key];
                }
            });
        }

        // 更新考试记录和学习记录列表
        this.updateExamRecordsList();
        this.updateLearningRecordsList();
    }

    // 显示成功消息
    showSuccessMessage(message) {
        this.showMessage(message, 'success');
    }

    // 显示错误消息
    showErrorMessage(message) {
        this.showMessage(message, 'error');
    }

    // 显示消息
    showMessage(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type === 'success' ? 'success' : 'danger'} alert-dismissible fade show position-fixed`;
        alertDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;

        document.body.appendChild(alertDiv);

        // 自动隐藏
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.remove();
            }
        }, 3000);
    }
}

// 处理导航栏active状态切换
function handleNavActive() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // 移除所有链接的active类
            navLinks.forEach(l => l.classList.remove('active'));
            // 为当前点击的链接添加active类
            link.classList.add('active');
        });
    });
}

// 页面加载完成后初始化系统
let personalFileSystem;
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM加载完成，开始初始化系统...');
    
    // 检查库加载状态
    checkLibrariesLoaded();
    
    // 确保登录界面正确显示
    initLogin();
    
    // 创建系统实例
    personalFileSystem = new PersonalFileSystem();
    window.personalFileSystem = personalFileSystem;
    
    // 初始化导航栏active状态
    handleNavActive();
    
    console.log('系统初始化脚本执行完成');
});

// 页面完全加载后再次检查库状态
window.addEventListener('load', () => {
    console.log('页面完全加载完成，再次检查库状态...');
    checkLibrariesLoaded();
    
    // 如果登录界面仍然没有显示，强制显示
    const loginScreen = document.getElementById('login-screen');
    if (loginScreen && localStorage.getItem('loggedIn') !== 'true') {
        loginScreen.style.display = 'flex';
        console.log('强制显示登录界面');
    }
});
import { EOL, arch, cpus, homedir, userInfo } from 'os';

export const os = async (userArg) => {
  switch (userArg[0]) {
    case '--EOL':
      return JSON.stringify(EOL);
    case '--cpus':
      console.log(`Overall amount of CPUs is ${cpus().length}`);
      return parseCpusInfo();
    case '--homedir':
      return homedir();
    case '--username':
      return userInfo().username;
    case '--architecture':
      return arch();
    default:
      throw new Error('Invalid input: invalid argument');
  }
};

function parseCpusInfo() {
  const cpusBasicInfo = cpus();
  const cpusInfo = cpusBasicInfo.map(cpu => {
    const model = cpu.model.slice(0, cpu.model.indexOf(' @'));
    const speed = cpu.speed > 1000 ? `${((Math.ceil(cpu.speed / 10) / 100).toFixed(2))} GHz` : `${cpu.speed / 10} GHz`;
    const cpuInfo = {
      model,
      speed
    };
    return cpuInfo;
  });

  return cpusInfo;
}

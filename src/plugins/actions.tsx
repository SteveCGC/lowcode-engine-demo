import { Button, Message } from '@alifd/next';
import { saveSchema } from '@/utils/store';
import { ILowCodePluginContext } from '@alilc/lowcode-engine';

const save = async () => {
  await saveSchema();
  Message.success('成功保存到本地');
};

const preview = async () => {
  await saveSchema();
  window.open('preview.html');
};

const savePlugin = (ctx: ILowCodePluginContext) => {
  return {
    name: 'saveSample',
    async init() {
      const { skeleton, hotkey } = ctx;

      skeleton.add({
        name: 'saveSample',
        area: 'topArea',
        type: 'Widget',
        props: { align: 'right' },
        content: <Button onClick={save}>保存到本地</Button>,
      });

      skeleton.add({
        name: 'previewSample',
        area: 'topArea',
        type: 'Widget',
        props: { align: 'right' },
        content: (
          <Button type="primary" onClick={preview}>
            预览
          </Button>
        ),
      });

      hotkey.bind('command+s', async (e) => {
        e.preventDefault();
        save();
      });
    },
  };
};

savePlugin.pluginName = 'saveSample';

export default savePlugin;

import { useState, useEffect, useRef } from 'react';
import {
  Modal, View, Text, TextInput, Pressable,
  ScrollView, Animated, StyleSheet, Keyboard,
} from 'react-native';
import Icon from './Icon';
import { colors, radius, shadows, spacing, catColor } from '../theme';

const FOLDERS = [
  { name: '패션', cat: 'fashion' },
  { name: '뷰티', cat: 'beauty' },
  { name: '식품', cat: 'food'   },
  { name: '기타', cat: 'etc'    },
];

export default function SaveSheet({ open, onClose, onSaved }) {
  const [mode,    setMode]    = useState('link');
  const [url,     setUrl]     = useState('');
  const [note,    setNote]    = useState('');
  const [folder,  setFolder]  = useState('패션');
  const [privacy, setPrivacy] = useState('public');
  const slideY = useRef(new Animated.Value(400)).current;

  useEffect(() => {
    if (open) {
      Animated.spring(slideY, { toValue: 0, useNativeDriver: true, damping: 20, stiffness: 200 }).start();
    } else {
      Animated.timing(slideY, { toValue: 400, duration: 250, useNativeDriver: true }).start();
      setUrl(''); setNote('');
    }
  }, [open]);

  const handleSave = () => { onSaved?.(); onClose?.(); };

  return (
    <Modal visible={open} transparent animationType="none" onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={() => { Keyboard.dismiss(); onClose(); }}>
        <Animated.View style={[styles.sheet, { transform: [{ translateY: slideY }] }]}>
          <Pressable onPress={() => {}}>
            {/* 핸들 */}
            <View style={styles.grabber} />

            {/* 헤더 */}
            <View style={styles.head}>
              <Pressable onPress={onClose}><Text style={styles.cancel}>취소</Text></Pressable>
              <Text style={styles.headTitle}>새 픽</Text>
              <Pressable onPress={handleSave} disabled={!url}>
                <Text style={[styles.saveBtn, !url ? styles.saveBtnDisabled : null]}>저장</Text>
              </Pressable>
            </View>

            <ScrollView style={styles.body} keyboardShouldPersistTaps="handled">
              {/* 링크 / 상품 탭 */}
              <PillTabs
                options={[{ key: 'link', label: '링크' }, { key: 'product', label: '상품' }]}
                value={mode} onChange={setMode}
              />

              {/* URL */}
              <Field label="URL">
                <View style={styles.inputRow}>
                  <Icon name="link" size={16} color={colors.ink3} />
                  <TextInput
                    style={[styles.input, { paddingLeft: 8 }]}
                    placeholder="https://"
                    placeholderTextColor={colors.ink3}
                    value={url}
                    onChangeText={setUrl}
                    autoCapitalize="none"
                    keyboardType="url"
                  />
                </View>
              </Field>

              {/* 미리보기 */}
              {!!url && (
                <View style={styles.preview}>
                  <View style={[styles.thumbMd, { backgroundColor: colors.paper2 }]}>
                    <Icon name="imageOff" size={20} color={colors.ink4} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.previewTitle}>미리보기 — 가져오는 중</Text>
                    <Text style={styles.previewMeta} numberOfLines={1}>{url}</Text>
                  </View>
                </View>
              )}

              {/* 폴더 */}
              <Field label="폴더">
                <View style={styles.folderRow}>
                  {FOLDERS.map(f => (
                    <Pressable
                      key={f.name}
                      style={[styles.folderPick, folder === f.name ? styles.folderPickOn : null]}
                      onPress={() => setFolder(f.name)}
                    >
                      <View style={[styles.catDot, { backgroundColor: catColor(f.cat) }]} />
                      <Text style={[styles.folderPickText, folder === f.name ? styles.folderPickTextOn : null]}>
                        {f.name}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </Field>

              {/* 노트 */}
              <Field label="노트 (선택)">
                <TextInput
                  style={styles.textarea}
                  placeholder="이 픽에 대한 짧은 메모"
                  placeholderTextColor={colors.ink3}
                  value={note}
                  onChangeText={setNote}
                  multiline
                  numberOfLines={3}
                  textAlignVertical="top"
                />
              </Field>

              {/* 공개 범위 */}
              <Field label="공개 범위">
                <PillTabs
                  options={[
                    { key: 'public',  label: '공개'   },
                    { key: 'friends', label: '친구만'  },
                    { key: 'private', label: '비공개'  },
                  ]}
                  value={privacy} onChange={setPrivacy}
                />
              </Field>

              <View style={{ height: 40 }} />
            </ScrollView>
          </Pressable>
        </Animated.View>
      </Pressable>
    </Modal>
  );
}

function Field({ label, children }) {
  return (
    <View style={fieldStyles.wrap}>
      <Text style={fieldStyles.label}>{label.toUpperCase()}</Text>
      {children}
    </View>
  );
}

export function PillTabs({ options, value, onChange }) {
  return (
    <View style={pillStyles.wrap}>
      {options.map(o => (
        <Pressable
          key={o.key}
          style={[pillStyles.btn, value === o.key && pillStyles.btnOn]}
          onPress={() => onChange(o.key)}
        >
          <Text style={[pillStyles.text, value === o.key && pillStyles.textOn]}>{o.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(31,26,20,0.32)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: colors.paper1,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    maxHeight: '88%',
    ...shadows.shLift,
  },
  grabber: {
    width: 36, height: 4,
    backgroundColor: colors.ink4,
    opacity: 0.4,
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: 8, marginBottom: 8,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.s5,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.lineSoft,
  },
  headTitle: { fontSize: 17, fontWeight: '600', color: colors.ink1 },
  cancel:    { fontSize: 15, color: colors.ink2 },
  saveBtn:   { fontSize: 15, fontWeight: '600', color: colors.accent },
  saveBtnDisabled: { opacity: 0.35 },
  body: { paddingHorizontal: spacing.s5, paddingTop: 16, gap: 14 },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.paper0,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.md,
    paddingHorizontal: 14,
    height: 44,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: colors.ink1,
  },
  preview: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    backgroundColor: colors.paper0,
    borderWidth: 1,
    borderColor: colors.lineSoft,
    borderRadius: radius.md,
    marginTop: 14,
  },
  thumbMd: {
    width: 56, height: 56,
    borderRadius: radius.md,
    alignItems: 'center', justifyContent: 'center',
  },
  previewTitle: { fontSize: 13, fontWeight: '600', color: colors.ink1 },
  previewMeta:  { fontSize: 11, color: colors.ink3, marginTop: 2 },
  folderRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 4 },
  folderPick: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.pill,
    backgroundColor: colors.paper0,
  },
  folderPickOn: { backgroundColor: colors.ink1, borderColor: colors.ink1 },
  folderPickText:   { fontSize: 13, color: colors.ink2 },
  folderPickTextOn: { color: colors.paper0 },
  catDot: { width: 8, height: 8, borderRadius: 4 },
  textarea: {
    backgroundColor: colors.paper0,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.md,
    padding: 12,
    fontSize: 15,
    color: colors.ink1,
    minHeight: 80,
  },
});

const fieldStyles = StyleSheet.create({
  wrap:  { marginTop: 14 },
  label: { fontSize: 11, color: colors.ink3, letterSpacing: 0.5, marginBottom: 6, textTransform: 'uppercase' },
});

const pillStyles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    backgroundColor: colors.paper2,
    padding: 4,
    borderRadius: radius.pill,
    gap: 2,
    alignSelf: 'flex-start',
  },
  btn:    { paddingVertical: 8, paddingHorizontal: 18, borderRadius: radius.pill },
  btnOn:  { backgroundColor: colors.paper0, ...shadows.sh1 },
  text:   { fontSize: 13, fontWeight: '600', color: colors.ink3 },
  textOn: { color: colors.ink1 },
});

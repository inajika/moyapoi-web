import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

/**
 * 共通ヘッダー
 */
export default function Header() {
  return (
    <header className="h-[4rem] p-1 bg-blue-200 flex flex-row">
      もやもやぽいぽい
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="ml-2 mr-2 bg-teal-500 hover:bg-teal-200 hover:text-black">
            これはなに?
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>「もやもやぽいぽい」ってなに?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            ほかのどこにもつながっていないこの場所で、
            <br />
            こころの「もやもや」を「ぽいぽい」はきだして、
            <br />
            なんとなくスッキリしてもらえるかもしれない……そんなサービスです。
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogCancel>とじる</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <a
        href="https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw"
        className="twitter-hashtag-button"
        data-text="「もやもや」を「ぽいぽい」してみませんか？"
        data-url="https://moyapoi.inajika.com/"
        data-lang="ja"
        data-show-count="false"
      >
        Xにポストする
      </a>
    </header>
  );
}

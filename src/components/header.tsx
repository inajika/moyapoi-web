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
    <header className="h-[8vh] p-1 bg-blue-200">
      もやもやぽいぽい
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="ml-2 bg-teal-500 hover:bg-teal-200 hover:text-black">
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
    </header>
  );
}

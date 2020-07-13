interface CommonModuleModel<T> {
  loading: Boolean;
  error: string | null;
  data: T;
}

type ResetPasswordDataModel = {
  isSent: Boolean;
};

export interface StoreModel {
  login: CommonModuleModel<null>;
  resetPassword: CommonModuleModel<ResetPasswordDataModel>;
}
